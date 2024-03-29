import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
// import {} from '@wordpress/components';
import { APLFM_API_URL, decode, excerpt, dateFormat } from "./utils";
import {useEffect} from "@wordpress/element";
import {ExternalLink} from '@wordpress/components';
import './editor.scss'

export default function Edit( { attributes, setAttributes } ) {
	const perPageorig = '';
	const perPage = '2'
	const paramsObj = {
		_embed: '',
		book_status: '94',
		per_page: perPage,
		orderby: 'pbc_finished_date'
	};
	const url = APLFM_API_URL + '?' + new URLSearchParams(paramsObj).toString();
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setAttributes({bookData: response});
			} )
			.catch((err) => console.error(err));
	}, []);

	const books = attributes.bookData;
	let doRender = Array.isArray(books);

	// per page option. Max 8.
	return (
		<div { ...useBlockProps() }>
			{attributes.bookData ? (
					<>
						{ doRender && (
							books.map( (book, key) => {
								return <div key={key} className="wrapper">
									<div className="latest-wrapper">
										<figure className="book-image">
											<img
												src={book._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
												alt={book._embedded['wp:featuredmedia'][0].alt_text} />
											<p>Read: <strong>{dateFormat(book.pbc_start_date[0])} – {dateFormat(book.pbc_finished_date[0])}</strong><br />
												Total pages: <strong>{book.pbc_total_pages[0]}</strong>
											</p>
										</figure>
										<div className="book-details">

											<p><a href={book.link}>{<strong>{decode(book.title.rendered)}</strong>}</a><br/>
											by {book.pbc_book_authors[0]}
											</p>

											<p>{excerpt(book.content.rendered, 40)}</p>
										</div>
									</div>
									<hr className="book-divider" />
								</div>
							})
						)}
					</>
			) : (
				<div>Loading!</div>
			)}
		</div>
	);
}
