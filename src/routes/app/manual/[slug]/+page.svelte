<script>
	import { page } from '$app/stores';
	import { FooterLanding as Footer }  from '../../../../lib/widgets';
	import {
		identifySelectedData,
		extensionsExperimentsToc,
		extensionsPersonsToc
	} from '../../../../lib/shared';
	import {
		TableOfСontents,
		BannerTableOfContent,
		RecommendationBlock
	} from '../../../../lib/entities';

	$: toc = identifySelectedData($page.params.slug);
</script>

<section
	class="flex h-full w-full flex-col items-center justify-center bg-gray-900 pt-20  text-gray-100"
>
	<div class="container mt-40 max-w-6xl space-y-6 p-2 sm:space-y-12 md:p-4 lg:p-6 xl:p-6">
		<BannerTableOfContent page={$page.params.slug} {toc} />
		<TableOfСontents {toc} />
	</div>
</section>

<section
	class="flex h-full w-full flex-col items-center justify-center bg-gray-900 pt-4 pb-10 text-gray-100"
>
	{#if $page.params.slug != 'experiments' || 'persons'}
		<h2 class="text-center text-4xl font-semibold text-violet-700 md:text-6xl lg:text-6xl">
			Extensions: {$page.params.slug}
		</h2>

		<div class=" flex w-full flex-row flex-wrap justify-center bg-gray-900  pb-10 text-gray-100">
			{#if $page.params.slug == 'persons'}
				{#each extensionsPersonsToc.data as recommendation}
					<RecommendationBlock link="/app/persons" {recommendation} />
				{/each}
			{:else if $page.params.slug == 'experiments'}
				{#each extensionsExperimentsToc.data as recommendation}
					<RecommendationBlock link="/app/extensions" {recommendation} />
				{/each}
			{/if}
		</div>
	{/if}
</section>

<Footer />
