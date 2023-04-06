function getLocationFromUrl(urlString, paramametr) {
	const urlArray = urlString.split('/'),
		location = urlArray[paramametr];

	return location;
}


export default getLocationFromUrl;
