<script>
	import { Article } from '../../../../lib/shared/';
	import { page } from '$app/stores';

	import {
		mainTocData,
		personsTocData,
		locationsTocData,
		experimentsTocData
	} from '../../../../lib/shared';

	const currentUrl = window.location.pathname;
	function getLocationFromUrl(urlString) {
		const urlArray = urlString.split('/'),
			location = urlArray[2];

		return location;
	}

	const locationValue = getLocationFromUrl(currentUrl);

	const textArray =
		locationValue == 'locations'
			? locationsTocData
			: locationValue == 'persons'
			? personsTocData
			: locationValue == 'experiments'
			? experimentsTocData
			: mainTocData;

	const thisArticleText = textArray.data[$page.params.slug - 1];
</script>

<Article manualArticle={thisArticleText} />
