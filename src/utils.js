export async function getJSON( url ) {
	const resp = await fetch( url );
	return await resp.json();
}
export const APLFM_API_URL = 'https://apiratelifefor.me/wp-json/wp/v2/books';

export const decode = function (str) {
	return str.replace(/&#([0-9]{1,4});/gi, function (match, numStr) {
		const num = parseInt(numStr, 10); // read num as normal number
		return String.fromCharCode(num);
	});
}

export const excerpt = function ( str, maxLength = 50 ) {
	const words = str.replace(/(<([^>]+)>)/ig, '').split(' ');

	if ( words.length > maxLength ) {
		return words.slice(0, maxLength).join(' ') + '...';
	}
	return str;
}

export const dateFormat = function ( timestamp ) {
	const thedate = new Date( Number(timestamp) * 1000 );
	return `${thedate.getFullYear()}-${('0' + (thedate.getMonth() + 1)).slice(-2)}-${('0' + thedate.getDate()).slice(-2)}`;
}
