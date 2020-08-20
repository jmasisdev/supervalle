<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'supervalle_github' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'f<IO Tc@#?UwZwo2YF@Vwxm->,ZL#*+Y-SDfx@C=X?m*TvD.CO_OF8FU-%wup0(U' );
define( 'SECURE_AUTH_KEY',  '[}Scb#I%oF+-?9r6,=h*+. X$X~|oeVEx,ag}GQZ#en.^bQC$I5#rNWxLY~.v{5!' );
define( 'LOGGED_IN_KEY',    '`_OF`u([$fmj>U#u7&SuW.K3^{BItT(8@7[{_PR)>F=r|P >^Ok=y$sgE;>wN0p>' );
define( 'NONCE_KEY',        '9^A@xV*i^#mOizUfujvh#KTPAYf&<)<W:WG|J{sDnO3P}G[C#v`2^&&L6[21+x5a' );
define( 'AUTH_SALT',        'U!GP>bD?zYFt4U1KB?ZH44[PMV*ZGcX!%WUW#>vN*6D*^C-:=tY4me.ZR+jd>^#f' );
define( 'SECURE_AUTH_SALT', 'gK,39kw<p51kAb`0Vz19$V:/Lpea+lEmDl2S,sV1?5~/w6@5xo?9P&_k-X8V4woY' );
define( 'LOGGED_IN_SALT',   'b=STaU^e3B@=`n!Y5P`mwo#<5M5`w85M)tS1#|e_ae49TPzf%qVq 6tdYvrC:+EW' );
define( 'NONCE_SALT',       'gM@wB5TEc46m+SdDaYVQ{XBuL Gm<3i.vPBJ{Su_mVz4_]}$K3OO)&}< %p8C)bG' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
