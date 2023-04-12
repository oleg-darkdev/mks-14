<script>
	import { SquareImagesWrapper, RecommendationBlock } from '../../../../lib/entities';
	import { ArticleSourceList } from '../../../../lib/widgets';
	import { page } from '$app/stores';
	import {
		extensionsExperimentsToc,
		Article,
		astronomyExperiments,
		biophysicsExperiments,
		biotechnologyExperiments,
		ecologyExperiments,
		materialsExperiments,
		medicineExperiments,
		microbiologyExperiments,
		microgravityExperiments,
		physicsExperiments,
		technologyExperiments,
		experimentsTocData
	} from '../../../../lib/shared/';

	const allExperimentsList = [].concat(
		experimentsTocData.data,
		astronomyExperiments.data,
		biophysicsExperiments.data,
		biotechnologyExperiments.data,
		ecologyExperiments.data,
		materialsExperiments.data,
		medicineExperiments.data,
		microbiologyExperiments.data,
		microgravityExperiments.data,
		physicsExperiments.data,
		technologyExperiments.data
	);

	const experimentData = allExperimentsList.find((u) => u.id == $page.params.slug);
</script>

<Article manualArticle={experimentData}>
	<SquareImagesWrapper data={experimentData} />
	<div slot="sources">
		<ArticleSourceList>
			{#each experimentData.sources as item}
				<tr class="hover:bg-gray-100 ">
					<td class="whitespace-nowrap px-6 py-4">
						<a href={item.link}>{item.title}</a>
					</td>
				</tr>
			{/each}
		</ArticleSourceList>
	</div>
</Article>

<section class="w-full p-2 md:p-4 lg:p-6">
	<h2
		class="mb-2 w-full text-center  text-4xl font-bold tracking-tighter text-gray-100 md:text-7xl lg:text-7xl  xl:text-7xl"
	>
		Other extensions
	</h2>
	<div
		class="mb-6 mb-4 grid w-full  grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
	>
		{#each extensionsExperimentsToc.data as recommendation}
			<RecommendationBlock link="/app/extensions/experiments" {recommendation} />
		{/each}
	</div>
</section>
