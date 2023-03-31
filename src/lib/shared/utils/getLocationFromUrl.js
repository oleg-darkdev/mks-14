function getLocationFromUrl(urlString) {
	const urlArray = urlString.split('/'),
		location = urlArray[2];

	return location;
}


export default getLocationFromUrl;
