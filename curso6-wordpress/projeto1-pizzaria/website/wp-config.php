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
define( 'DB_NAME', 'cursowp' );

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
define( 'AUTH_KEY',         ' Qbt7*J@6NTrJ?b:r;Y,%8Re<8Z#M[_zH]!&rOazQdtBx&_H6L$XOu9CZ16TKjFs' );
define( 'SECURE_AUTH_KEY',  '_pMD{w6N~?5U%`1OP{4Sn/L_bi</^M<h<F>&d?]G$S^WAm`KST[0: [hXXA$*QQU' );
define( 'LOGGED_IN_KEY',    'us#ZZksQakr9ElJSnTs$54y}YBT$BO}eR=a?/t?xa^|L5!QY%t?a;mX{N!>mNXiY' );
define( 'NONCE_KEY',        'Ze{k&E@MN (%~)+*v`[Xo=0j4 !9}#ZxO{xLyKei17l+BO!7,XS5/tT~z/&m.i2~' );
define( 'AUTH_SALT',        'W,tz:w:V9wox!rkj#j`$4KP_WF#CRxNG[zPe3ge_U.In+o[nRxF`8kR7OK9/-*6I' );
define( 'SECURE_AUTH_SALT', '#lsQa?IInz.RJ<9Wya >+6--&SI2Q7m};k,Mm= Lm>P=YQfTXX2#pK)FKgD>vQ<;' );
define( 'LOGGED_IN_SALT',   'v)>K@_`9sh4E7(AsxF81/UF9`wahan!f0X:~P{wi.kV*71TsvFZ#IWs/YQ>{Xx1Z' );
define( 'NONCE_SALT',       ',uL=lgFf<8{1Iu/`iLkMV)I[ak^t8#(;]E4L{BFvJEz93x2}q>Lg={c1S~^_Qbj]' );

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
