<script>
	import {
		Article,
		extensionsPersonsToc,
	} from '../../../../../lib/shared';

	import { page } from '$app/stores';
	import { RecommendationBlock } from '../../../../../lib/entities';

	const getThisArticleText = (textArray) => textArray.data[$page.params.slug - 1];
</script>

<Article manualArticle={getThisArticleText(extensionsPersonsToc)} />

<h2 class="mb-2 w-full text-center  text-7xl font-bold tracking-tighter  text-gray-100">
	Other extensions
</h2>
<div class="mb-6 mb-4 grid w-full grid-cols-2 gap-2">
	{#each extensionsPersonsToc.data as recommendation}
		<RecommendationBlock link="/app/manual" {recommendation} />
	{/each}
</div>
