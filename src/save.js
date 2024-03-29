import { useBlockProps } from '@wordpress/block-editor';
export default function save( { attributes } ) {
	//const {} = attributes;

	const doReturn = true;
	if ( doReturn ) {
		return null;
	}

	return <div { ...useBlockProps.save() }>
		who
	</div>;
}
