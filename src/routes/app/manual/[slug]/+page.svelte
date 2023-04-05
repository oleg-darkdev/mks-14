<script>
	import { page } from '$app/stores';
	import {
		identifySelectedData,
		LargeBtn,
		extensionsCountriesTocTocData
	} from '../../../../lib/shared';
	import {
		TableOfСontents,
		BannerTableOfContent,
		RecommendationBlock
	} from '../../../../lib/entities';

	$: toc = identifySelectedData($page.params.slug);
</script>

<section
	class="flex h-full w-full flex-col items-center justify-center bg-gray-900 pt-20 pb-10 text-gray-100"
>
	<div class="container mx-auto max-w-6xl space-y-6 p-2 sm:space-y-12 md:p-4 lg:p-6 xl:p-6">
		<BannerTableOfContent page={$page.params.slug} {toc} />
		<TableOfСontents {toc} />
	</div>

	{#if $page.params.slug == 'persons'}
		<div
			class="grid w-full grid-cols-2 gap-2 bg-gray-900 pb-10  text-gray-100 lg:w-10/12 xl:w-10/12"
		>
			{#each extensionsCountriesTocTocData.data as recommendation}
				<RecommendationBlock link="/app/extensions" {recommendation} />
			{/each}
		</div>
	{/if}

	<LargeBtn link="/app" text="Back to instruction" />
</section>
