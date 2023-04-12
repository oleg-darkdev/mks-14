<script>
	import { Article } from '../../../../lib/shared/';
	import { RecommendationBlock } from '../../../../lib/entities';

	import { page } from '$app/stores';
	import {
		getCurrentUrl,
		getLocationFromUrl,
		identifySelectedData,
		extensionsPersonsToc
	} from '../../../../lib/shared/';

	const locationValue = getLocationFromUrl(getCurrentUrl(window), 2),
		textArray = identifySelectedData(locationValue),
		getThisArticleText = (textArray) => textArray.data[$page.params.slug - 1];
</script>

<Article manualArticle={getThisArticleText(textArray)} />

<h2 class="mb-2 w-full text-center  lg:text-6xl md:text-6xl text-4xl font-bold tracking-tighter  text-gray-100">
	More persons in extensions
</h2>
<div class="mb-6 mb-4 flex flex-row flex-wrap w-full ">
	{#each extensionsPersonsToc.data as recommendation}
		<RecommendationBlock link="/app/manual" {recommendation} />
	{/each}
</div>
