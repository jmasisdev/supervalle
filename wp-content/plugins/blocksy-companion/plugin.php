<?php

namespace Blocksy;

class Plugin
{
    /**
     * Blocksy instance.
     *
     * Holds the blocksy plugin instance.
     *
     * @var Plugin
     */
    private static  $instance = null ;
    /**
     * Blocksy extensions manager.
     *
     * @var ExtensionsManager
     */
    public  $extensions = null ;
    public  $extensions_api = null ;
    public  $premium = null ;
    public  $dashboard = null ;
    public  $theme_integration = null ;
    public  $cli = null ;
    public  $cache_manager = null ;
    // Features
    public  $feat_google_analytics = null ;
    public  $demo = null ;
    public  $dynamic_css = null ;
    public  $header = null ;
    private  $is_blocksy = '__NOT_SET__' ;
    private  $desired_blocksy_version = '1.7.18' ;
    /**
     * Instance.
     *
     * Ensures only one instance of the plugin class is loaded or can be loaded.
     *
     * @static
     *
     * @return Plugin An instance of the class.
     */
    public static function instance()
    {
        if ( is_null( self::$instance ) ) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    public function init()
    {
        if ( !$this->check_if_blocksy_is_activated() ) {
            return;
        }
        add_action( 'wp_ajax_blocksy_toggle_has_beta_consent', function () {
            if ( !current_user_can( 'edit_theme_options' ) ) {
                wp_send_json_error();
            }
            $future_value = ( Plugin::instance()->user_wants_beta_updates() ? 'no' : 'yes' );
            update_option( 'blocksy_has_beta_updates', $future_value );
            wp_send_json_success( [] );
        } );
        add_action( 'widgets_init', [ 'BlocksyWidgetFactory', 'register_all_widgets' ] );
        add_action( 'admin_enqueue_scripts', function () {
            $locale_data_ct = blc_call_fn( [
                'fn'      => 'blocksy_get_jed_locale_data',
                'default' => [],
            ], 'blc' );
            wp_add_inline_script( 'wp-i18n', 'wp.i18n.setLocaleData( ' . wp_json_encode( $locale_data_ct ) . ', "blc" );' );
        } );
        $this->cache_manager = new CacheResetManager();
        $this->extensions_api = new ExtensionsManagerApi();
        $this->theme_integration = new ThemeIntegration();
        $this->demo = new DemoInstall();
        $this->dynamic_css = new DynamicCss();
    }
    
    /**
     * Init components that need early access to the system.
     *
     * @access private
     */
    public function early_init()
    {
        if ( !$this->check_if_blocksy_is_activated() ) {
            return;
        }
        $this->init_freemius();
        $this->extensions = new ExtensionsManager();
        $this->dashboard = new Dashboard();
        $this->header = new HeaderAdditions();
        $this->feat_google_analytics = new GoogleAnalytics();
        new OpenGraphMetaData();
        if ( defined( 'WP_CLI' ) && WP_CLI ) {
            $this->cli = new Cli();
        }
        $this->plugin_update();
    }
    
    /**
     * Register autoloader.
     *
     * Blocksy autoloader loads all the classes needed to run the plugin.
     *
     * @access private
     */
    private function register_autoloader()
    {
        require BLOCKSY_PATH . '/framework/autoload.php';
        Autoloader::run();
    }
    
    /**
     * Plugin constructor.
     *
     * Initializing Blocksy plugin.
     *
     * @access private
     */
    private function __construct()
    {
        require BLOCKSY_PATH . '/framework/helpers/blocksy-integration.php';
        require BLOCKSY_PATH . '/framework/helpers/helpers.php';
        $this->register_autoloader();
        $this->early_init();
        add_action( 'init', [ $this, 'init' ], 0 );
    }
    
    public function check_if_blocksy_is_activated( $forced = false )
    {
        if ( !$forced ) {
            return true;
        }
        
        if ( $this->is_blocksy === '__NOT_SET__' ) {
            $theme = wp_get_theme( get_template() );
            $is_correct_theme = strpos( $theme->get( 'Name' ), 'Blocksy' ) !== false;
            $is_correct_version = version_compare( $theme->get( 'Version' ), $this->desired_blocksy_version ) > -1;
            $another_theme_in_preview = false;
            if ( (isset( $_REQUEST['theme'] ) && strpos( strtolower( $_REQUEST['theme'] ), 'blocksy' ) === false || isset( $_REQUEST['customize_theme'] ) && strpos( strtolower( $_REQUEST['customize_theme'] ), 'blocksy' ) === false) && strpos( $_SERVER['REQUEST_URI'], 'customize' ) !== false ) {
                $another_theme_in_preview = true;
            }
            $this->is_blocksy = $is_correct_theme && $is_correct_version && !$another_theme_in_preview;
        }
        
        return !!$this->is_blocksy;
    }
    
    public function user_wants_beta_updates()
    {
        $option_value = get_option( 'blocksy_has_beta_updates', 'no' );
        return $option_value === 'yes';
    }
    
    public function plugin_update()
    {
        $has_beta = $this->user_wants_beta_updates();
        add_action( 'init', function () use( $has_beta ) {
            if ( !function_exists( '\\Blocksy\\blc_fs' ) ) {
                return;
            }
            $data = get_plugin_data( BLOCKSY__FILE__ );
            new \EDD_SL_Plugin_Updater( 'https://creativethemes.com/', BLOCKSY__FILE__, [
                'version' => $data['Version'],
                'license' => '123',
                'item_id' => 515,
                'author'  => 'CreativeThemes',
                'beta'    => $has_beta,
            ] );
        } );
        if ( !$has_beta ) {
            return;
        }
        add_action( 'after_setup_theme', function () {
            $theme = wp_get_theme( get_template() );
            if ( !$this->check_if_blocksy_is_activated( true ) ) {
                return;
            }
            $updater = new \EDD_Theme_Updater_Admin(
                // Config settings
                $config = array(
                    'remote_api_url' => 'https://creativethemes.com/',
                    'item_name'      => 'Blocksy',
                    'theme_slug'     => 'blocksy',
                    'version'        => $theme->get( 'Version' ),
                    'author'         => 'CreativeThemes',
                    'download_id'    => '599',
                    'renew_url'      => '',
                ),
                // Strings
                $strings = array(
                    'theme-license'             => __( 'Theme License', 'edd-theme-updater' ),
                    'enter-key'                 => __( 'Enter your theme license key.', 'edd-theme-updater' ),
                    'license-key'               => __( 'License Key', 'edd-theme-updater' ),
                    'license-action'            => __( 'License Action', 'edd-theme-updater' ),
                    'deactivate-license'        => __( 'Deactivate License', 'edd-theme-updater' ),
                    'activate-license'          => __( 'Activate License', 'edd-theme-updater' ),
                    'status-unknown'            => __( 'License status is unknown.', 'edd-theme-updater' ),
                    'renew'                     => __( 'Renew?', 'edd-theme-updater' ),
                    'unlimited'                 => __( 'unlimited', 'edd-theme-updater' ),
                    'license-key-is-active'     => __( 'License key is active.', 'edd-theme-updater' ),
                    'expires%s'                 => __( 'Expires %s.', 'edd-theme-updater' ),
                    '%1$s/%2$-sites'            => __( 'You have %1$s / %2$s sites activated.', 'edd-theme-updater' ),
                    'license-key-expired-%s'    => __( 'License key expired %s.', 'edd-theme-updater' ),
                    'license-key-expired'       => __( 'License key has expired.', 'edd-theme-updater' ),
                    'license-keys-do-not-match' => __( 'License keys do not match.', 'edd-theme-updater' ),
                    'license-is-inactive'       => __( 'License is inactive.', 'edd-theme-updater' ),
                    'license-key-is-disabled'   => __( 'License key is disabled.', 'edd-theme-updater' ),
                    'site-is-inactive'          => __( 'Site is inactive.', 'edd-theme-updater' ),
                    'license-status-unknown'    => __( 'License status is unknown.', 'edd-theme-updater' ),
                    'update-notice'             => __( "Updating this theme will lose any customizations you have made. 'Cancel' to stop, 'OK' to update.", 'edd-theme-updater' ),
                    'update-available'          => __( '<strong>%1$s %2$s</strong> is available. <a href="%3$s" class="thickbox" title="%4s">Check out what\'s new</a> or <a href="%5$s"%6$s>update now</a>.', 'edd-theme-updater' ),
                )
            );
        } );
    }
    
    public function init_freemius()
    {
        
        if ( !function_exists( 'blc_fs' ) ) {
            // Create a helper function for easy SDK access.
            function blc_fs()
            {
                global  $blc_fs ;
                
                if ( !isset( $blc_fs ) ) {
                    // Include Freemius SDK.
                    require_once dirname( __FILE__ ) . '/freemius/start.php';
                    /*
                    					$blc_fs = fs_dynamic_init(array(
                    						'id' => '5295',
                    						'slug' => 'blocksy-companion',
                    						'premium_slug' => 'blocksy-companion-pro',
                    						'type' => 'plugin',
                    						'public_key' => 'pk_1627f5f13c6188ed69626e00a39c8',
                    						'is_premium' => true,
                    						'premium_suffix' => 'PRO',
                    						// If your plugin is a serviceware, set this option to false.
                    						'has_premium_version' => true,
                    						'has_addons' => false,
                    						'has_paid_plans' => true,
                    						'is_org_compliant' => false,
                    						'menu' => array(
                    							'slug' => 'ct-dashboard',
                    							'support' => false,
                    							// 'contact' => false,
                    							// 'pricing' => false,
                    							// 'account' => false
                    						),
                    						'secret_key' => 'sk_x4<+v9LpptJh&{isFpPRQOIxDov?;',
                    					));
                    */
                    $blc_fs = fs_dynamic_init( array(
                        'id'               => '5115',
                        'slug'             => 'blocksy-companion',
                        'type'             => 'plugin',
                        'public_key'       => 'pk_b00a5cbae90b2e948015a7d0710f5',
                        'is_premium'       => false,
                        'has_addons'       => false,
                        'has_paid_plans'   => false,
                        'is_org_compliant' => false,
                        'menu'             => array(
                        'slug'    => 'ct-dashboard',
                        'support' => false,
                        'contact' => false,
                        'pricing' => false,
                        'account' => false,
                    ),
                        'is_live'          => true,
                    ) );
                }
                
                return $blc_fs;
            }
            
            // Init Freemius.
            blc_fs();
            // Signal that SDK was initiated.
            do_action( 'blc_fs_loaded' );
        }
    
    }

}
Plugin::instance();