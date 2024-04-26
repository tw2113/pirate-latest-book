<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

foreach ( $attributes['bookData'] as $book ) {

?>
<div class="wrapper wp-block-tw2113-pirate-latest-book">
	<div class="latest-wrapper">
		<figure class="book-image">
			<img
				src="<?php echo esc_url( $book['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['medium']['source_url'] ); ?>"
				alt="<?php echo esc_attr( $book['_embedded']['wp:featuredmedia'][0]['alt_text']) ?>"
			<p>Read:
				<strong><?php echo esc_html( date( 'Y-m-d', $book['pbc_start_date'][0] ) ); ?> – <?php echo esc_html( date( 'Y-m-d', $book['pbc_finished_date'][0] ) ); ?></strong><br />
				Total pages: <strong><?php echo esc_html( $book['pbc_total_pages'][0] ); ?></strong>
			</p>
		</figure>
		<div class="book-details">

			<p><a href="<?php echo esc_url( $book['link'] ); ?>"><strong><?php echo esc_html( $book['title']['rendered'] ); ?></strong></a><br />
				by <?php echo esc_html( $book['pbc_book_authors'][0] ); ?>
			</p>
<?php echo strlen( $book['content']['rendered']); ?>
			<p><?php echo wp_trim_words( $book['content']['rendered'] ); ?></p>
		</div>
	</div>
	<hr class="book-divider" />
</div>

<?php
}
