<?php

namespace Blocksy;

class HeaderAdditions
{
    private  $has_transparent_header = '__DEFAULT__' ;
    private  $has_sticky_header = '__DEFAULT__' ;
    public function __construct()
    {
        add_action( 'admin_enqueue_scripts', function () {
            if ( !function_exists( 'get_plugin_data' ) ) {
                require_once ABSPATH . 'wp-admin/includes/plugin.php';
            }
            global  $wp_customize ;
            $data = get_plugin_data( BLOCKSY__FILE__ );
            $deps = [ 'ct-options-scripts' ];
            $current_screen = get_current_screen();
            if ( $current_screen && $current_screen->id === 'customize' ) {
                $deps = [ 'ct-customizer-controls' ];
            }
            wp_enqueue_script(
                'blocksy-admin-scripts',
                BLOCKSY_URL . 'static/bundle/options.js',
                $deps,
                $data['Version'],
                true
            );
            $conditions_manager = new ConditionsManager();
            $localize = array_merge( [
                'all_condition_rules' => $conditions_manager->get_all_rules(),
                'ajax_url'            => admin_url( 'admin-ajax.php' ),
                'rest_url'            => get_rest_url(),
            ] );
            wp_localize_script( 'blocksy-admin-scripts', 'blocksy_admin', $localize );
            wp_enqueue_style(
                'blocksy-styles',
                BLOCKSY_URL . 'static/bundle/options.css',
                [],
                $data['Version']
            );
        }, 50 );
        add_filter(
            'blocksy:header:device-wrapper-attr',
            function ( $attr, $device ) {
            $transparent_result = $this->current_screen_has_transparent();
            if ( !$transparent_result ) {
                return $attr;
            }
            if ( in_array( $device, $transparent_result ) ) {
                $attr['data-transparent'] = '';
            }
            return $attr;
        },
            10,
            2
        );
        add_filter( 'blocksy:header:item-template-args', function ( $args ) {
            $args['has_transparent_header'] = $this->current_screen_has_transparent();
            $args['has_sticky_header'] = $this->current_screen_has_sticky();
            return $args;
        } );
        add_filter(
            'blocksy:header:row-wrapper-attr',
            function ( $attr, $row, $device ) {
            $current_section = blocksy_manager()->header_builder->get_current_section();
            if ( !isset( $current_section['settings'] ) ) {
                $current_section['settings'] = [];
            }
            $atts = $current_section['settings'];
            $transparent_result = $this->current_screen_has_transparent();
            if ( $transparent_result ) {
                if ( in_array( $device, $transparent_result ) ) {
                    $attr['data-transparent-row'] = 'yes';
                }
            }
            return $attr;
        },
            10,
            3
        );
        add_filter(
            'blocksy:header:rows-render',
            function ( $custom_content, $rows, $device ) {
            $sticky_result = $this->current_screen_has_sticky();
            if ( !$sticky_result ) {
                return $custom_content;
            }
            if ( !in_array( $device, $sticky_result['devices'] ) ) {
                return $custom_content;
            }
            $start_html = '<div class="ct-sticky-container">';
            $start_html .= '<div data-sticky="' . $sticky_result['effect'] . '">';
            $end_html = '</div></div>';
            
            if ( $sticky_result['behaviour'] === 'top_middle' && (isset( $rows['top-row'] ) || isset( $rows['middle-row'] )) ) {
                
                if ( isset( $rows['top-row'] ) ) {
                    $rows['top-row'] = $start_html . $rows['top-row'];
                } else {
                    $rows['middle-row'] = $start_html . $rows['middle-row'];
                }
                
                
                if ( isset( $rows['middle-row'] ) ) {
                    $rows['middle-row'] = $rows['middle-row'] . $end_html;
                } else {
                    $rows['top-row'] = $rows['top-row'] . $end_html;
                }
                
                return implode( '', array_values( $rows ) );
            }
            
            
            if ( $sticky_result['behaviour'] === 'middle_bottom' && (isset( $rows['middle-row'] ) || isset( $rows['bottom-row'] )) ) {
                
                if ( isset( $rows['middle-row'] ) ) {
                    $rows['middle-row'] = $start_html . $rows['middle-row'];
                } else {
                    $rows['bottom-row'] = $start_html . $rows['bottom-row'];
                }
                
                
                if ( isset( $rows['bottom-row'] ) ) {
                    $rows['bottom-row'] = $rows['bottom-row'] . $end_html;
                } else {
                    $rows['middle-row'] = $rows['middle-row'] . $end_html;
                }
                
                return implode( '', array_values( $rows ) );
            }
            
            
            if ( $sticky_result['behaviour'] === 'middle' && isset( $rows['middle-row'] ) ) {
                $rows['middle-row'] = $start_html . $rows['middle-row'] . $end_html;
                return implode( '', array_values( $rows ) );
            }
            
            
            if ( $sticky_result['behaviour'] === 'bottom' && isset( $rows['bottom-row'] ) ) {
                $rows['bottom-row'] = $start_html . $rows['bottom-row'] . $end_html;
                return implode( '', array_values( $rows ) );
            }
            
            
            if ( $sticky_result['behaviour'] === 'top' && isset( $rows['top-row'] ) ) {
                $rows['top-row'] = $start_html . $rows['top-row'] . $end_html;
                return implode( '', array_values( $rows ) );
            }
            
            if ( $sticky_result['behaviour'] === 'entire_header' ) {
                return $start_html . implode( '', array_values( $rows ) ) . $end_html;
            }
            return null;
        },
            10,
            3
        );
        add_filter( 'blocksy:header:dynamic-styles-args', function ( $args ) {
            $args['has_transparent_header'] = $this->current_screen_has_transparent( false );
            $args['has_sticky_header'] = $this->current_screen_has_sticky();
            return $args;
        } );
        add_filter(
            'blocksy:header:current_section_id',
            function ( $section_id, $all_sections ) {
            $maybe_header = $this->maybe_get_header_that_matches( $all_sections );
            if ( $maybe_header ) {
                return $maybe_header;
            }
            return $section_id;
        },
            10,
            2
        );
        add_filter(
            'blocksy:header:default_value',
            function ( $value, $header_builder ) {
            $value['sections'][] = $header_builder->get_structure_for( [
                'id'       => 'ct-custom-transparent',
                'name'     => __( 'Transparent', 'blocksy' ),
                'mode'     => 'placements',
                'settings' => [
                'is_absolute' => 'yes',
            ],
                'items'    => [
                'desktop' => [
                'middle-row' => [
                'start' => [ 'logo' ],
                'end'   => [ 'menu', 'search' ],
            ],
            ],
                'mobile'  => [
                'middle-row' => [
                'start' => [ 'logo' ],
                'end'   => [ 'trigger' ],
            ],
                'offcanvas'  => [
                'start' => [ 'mobile-menu' ],
            ],
            ],
            ],
            ] );
            return $value;
        },
            10,
            2
        );
        add_action( 'wp_ajax_blocksy_header_get_all_conditions', function () {
            if ( !current_user_can( 'manage_options' ) ) {
                wp_send_json_error();
            }
            wp_send_json_success( [
                'conditions' => $this->get_conditions(),
            ] );
        } );
        add_action( 'wp_ajax_blocksy_header_update_all_conditions', function () {
            if ( !current_user_can( 'manage_options' ) ) {
                wp_send_json_error();
            }
            $data = json_decode( file_get_contents( 'php://input' ), true );
            $this->set_conditions( $data );
            wp_send_json_success();
        } );
        add_filter( 'blocksy:header:items-paths', function ( $paths ) {
            $paths[] = dirname( __FILE__ ) . '/header/items';
            return $paths;
        } );
        add_action( 'wp_footer', function () {
            if ( !class_exists( 'Blocksy_Header_Builder_Render' ) ) {
                return;
            }
            $render = new \Blocksy_Header_Builder_Render();
            if ( !$render->contains_item( 'account' ) ) {
                return;
            }
            echo  blc_call_fn( [
                'fn' => 'blocksy_render_view',
            ], dirname( __FILE__ ) . '/header/account-modal.php' ) ;
        } );
        add_filter( 'blocksy:header:settings', function ( $opt ) {
            $opt = blc_call_fn(
                [
                'fn'      => 'blocksy_get_options',
                'default' => 'array',
            ],
                dirname( __FILE__ ) . '/header/header-options.php',
                [],
                false
            );
            return $opt;
        } );
    }
    
    public function current_screen_has_transparent( $check_conditions = true )
    {
        
        if ( true || $this->has_transparent_header === '__DEFAULT__' || !$check_conditions ) {
            $current_section = blocksy_manager()->header_builder->get_current_section();
            if ( !isset( $current_section['settings'] ) ) {
                $current_section['settings'] = [];
            }
            $atts = $current_section['settings'];
            
            if ( blocksy_akg( 'has_transparent_header', $atts, 'no' ) === 'no' ) {
                $this->has_transparent_header = false;
                return false;
            }
            
            $transparent_behaviour = blocksy_akg( 'transparent_behaviour', $atts, [
                'desktop' => true,
                'tablet'  => true,
                'mobile'  => true,
            ] );
            $transparent_result = [];
            foreach ( $transparent_behaviour as $device => $value ) {
                if ( !$value ) {
                    continue;
                }
                $transparent_result[] = $device;
            }
            $conditions_manager = new \Blocksy\ConditionsManager();
            $this->has_transparent_header = false;
            if ( count( $transparent_result ) > 0 && ($current_section['id'] === 'type-1' && $conditions_manager->condition_matches( blocksy_akg( 'transparent_conditions', $atts, [
                [
                'type' => 'include',
                'rule' => 'everywhere',
            ],
                [
                'type' => 'exclude',
                'rule' => '404',
            ],
                [
                'type' => 'exclude',
                'rule' => 'search',
            ],
                [
                'type' => 'exclude',
                'rule' => 'archives',
            ]
            ] ) ) || $current_section['id'] !== 'type-1' || !$check_conditions) ) {
                $this->has_transparent_header = $transparent_result;
            }
        }
        
        return $this->has_transparent_header;
    }
    
    public function current_screen_has_sticky()
    {
        
        if ( $this->has_sticky_header === '__DEFAULT__' ) {
            $current_section = blocksy_manager()->header_builder->get_current_section();
            if ( !isset( $current_section['settings'] ) ) {
                $current_section['settings'] = [];
            }
            $atts = $current_section['settings'];
            
            if ( blocksy_akg( 'has_sticky_header', $atts, 'no' ) === 'no' ) {
                $this->has_sticky_header = false;
                return $this->has_sticky_header;
            }
            
            $atts = $current_section['settings'];
            $sticky_behaviour = blocksy_akg( 'sticky_behaviour', $atts, [
                'desktop' => true,
                'mobile'  => true,
            ] );
            $sticky_result = [
                'devices'   => [],
                'behaviour' => blocksy_akg( 'sticky_rows', $atts, 'middle' ),
                'effect'    => blocksy_akg( 'sticky_effect', $atts, 'shrink' ),
            ];
            foreach ( $sticky_behaviour as $device => $value ) {
                if ( !$value ) {
                    continue;
                }
                $sticky_result['devices'][] = $device;
            }
            $this->has_sticky_header = $sticky_result;
        }
        
        return $this->has_sticky_header;
    }
    
    public function patch_conditions( $post_id, $old_post_id )
    {
        $conditions = $this->get_conditions();
        foreach ( $conditions as $index => $single_condition ) {
            $particular_conditions = $single_condition['conditions'];
            foreach ( $particular_conditions as $nested_index => $single_particular_condition ) {
                if ( ($single_particular_condition['rule'] === 'page_ids' || $single_particular_condition['rule'] === 'post_ids') && (isset( $single_particular_condition['payload'] ) && isset( $single_particular_condition['payload']['post_id'] ) && intval( $single_particular_condition['payload']['post_id'] ) === $old_post_id) ) {
                    $particular_conditions[$nested_index]['payload']['post_id'] = $post_id;
                }
            }
            $conditions[$index]['conditions'] = $particular_conditions;
        }
        $this->set_conditions( $conditions );
    }
    
    public function get_conditions()
    {
        $option = get_theme_mod( 'blocksy_premium_header_conditions', [ [
            'id'         => 'type-1',
            'conditions' => [ [
            'type' => 'include',
            'rule' => 'everywhere',
        ] ],
        ] ] );
        if ( empty($option) ) {
            $option = [];
        }
        return $option;
    }
    
    public function set_conditions( $conditions )
    {
        set_theme_mod( 'blocksy_premium_header_conditions', $conditions );
    }
    
    private function maybe_get_header_that_matches( $all_sections )
    {
        $all_conditions = $this->get_conditions();
        foreach ( array_reverse( $all_sections['sections'] ) as $single_section ) {
            $conditions = [];
            if ( strpos( $single_section['id'], 'ct-custom' ) === false ) {
                continue;
            }
            foreach ( $all_conditions as $single_condition ) {
                if ( $single_condition['id'] === $single_section['id'] ) {
                    $conditions = $single_condition['conditions'];
                }
            }
            $conditions_manager = new \Blocksy\ConditionsManager();
            if ( $conditions_manager->condition_matches( $conditions ) ) {
                return $single_section['id'];
            }
        }
        return null;
    }

}