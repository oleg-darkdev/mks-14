<script>
	import { Article } from '../../../../lib/shared/';
	import { page } from '$app/stores';
	import { getCurrentUrl, getLocationFromUrl, identifySelectedData } from '../../../../lib/shared/';
	import { FooterLanding as Footer } from '../../../../lib/widgets';

	const locationValue = getLocationFromUrl(getCurrentUrl(window), 2),
		textArray = identifySelectedData(locationValue),
		getThisArticleText = (textArray) => textArray.data[$page.params.slug - 1];
</script>

<Article manualArticle={getThisArticleText(textArray)} />
<Footer />
