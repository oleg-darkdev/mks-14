<script>
	import { Article } from '../../../../lib/shared/';
	import { page } from '$app/stores';
	import { getCurrentUrl, getLocationFromUrl, identifySelectedData } from '../../../../lib/shared/';

	const locationValue = getLocationFromUrl(getCurrentUrl(window)),
		textArray = identifySelectedData(locationValue),
		getThisArticleText = (textArray) => textArray.data[$page.params.slug - 1];
</script>

<Article manualArticle={getThisArticleText(textArray)} />
