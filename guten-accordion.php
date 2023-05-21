<?php
/**
 * Plugin Name:       Accordion Block
 * Description:       A long time ago in a galaxy far, far away...
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenpride
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_guten_accordion_block_init() {
	register_block_type( __DIR__ . '/build' );
	if ( ! is_admin() ) {
		wp_enqueue_style( 'guten-accordion-styles', plugins_url('/build/style-index.css', __FILE__), array(), '1.0', 'all' );
		wp_enqueue_script( 'guten-accordion-scripts', plugins_url( '/dist/accordion.js', __FILE__ ), '', '', true );
		// wp_enqueue_script( 'lazy-loader', plugins_url( '/src/addLazyLoad.js', __FILE__ ), '', '', true );
	}
	
}
add_action( 'init', 'create_block_guten_accordion_block_init' );
