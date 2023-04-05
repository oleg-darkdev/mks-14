<script>
	import { Article } from '../../../../lib/shared/';
	import { page } from '$app/stores';
	import {
		getCurrentUrl,
		getLocationFromUrl,
		identifySelectedData,
		extensionsCountriesTocTocData
	} from '../../../../lib/shared/';
	import { RecommendationBlock } from '../../../../lib/entities';

	const locationValue = getLocationFromUrl(getCurrentUrl(window)),
		textArray = identifySelectedData(locationValue),
		getThisArticleText = (textArray) => textArray.data[$page.params.slug - 1];
</script>

<Article manualArticle={getThisArticleText(textArray)} />

<h2 class="mb-2 w-full text-center  text-7xl font-bold tracking-tighter  text-gray-100">
	Other extensions
</h2>
<div class="mb-6 mb-4 grid w-full grid-cols-2 gap-2">
	{#each extensionsCountriesTocTocData.data as recommendation}
		<RecommendationBlock link="/app/manual" {recommendation} />
	{/each}
</div>
