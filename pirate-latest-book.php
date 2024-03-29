<?php
/**
 * Plugin Name:       Pirate Latest Book
 * Description:       Display my most recently read book.
 * Version:           0.1.0
 * Requires at least: 6.2
 * Requires PHP:      7.0
 * Author:            Michael Beckwith
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pirate-latest-book
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function pirate_latest_book_pirate_latest_book_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'pirate_latest_book_pirate_latest_book_init' );
