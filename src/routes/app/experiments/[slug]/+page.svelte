<script>
	import { SquareImagesWrapper, RecommendationBlock } from '../../../../lib/entities';
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

	const experimentData = allExperimentsList.find(u => u.id == $page.params.slug);
</script>

<Article manualArticle={experimentData}>
	<SquareImagesWrapper data={experimentData} />
</Article>

<section
	class="mx-auto max-w-2xl rounded-lg border-2 border-violet-700 p-6 shadow-md shadow-violet-700  md:px-8"
>
	<div class="max-w-lg">
		<h3 class="text-xl font-bold text-violet-700 sm:text-2xl">Sources list</h3>
		<p class="mt-2 text-gray-400">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		</p>
	</div>
	<div
		class="mt-4 mb-2 overflow-x-auto rounded-lg border border-violet-700  shadow-md  shadow-violet-700"
	>
		<table class="w-full table-auto text-left text-sm">
			<thead class="border-b border-b-violet-700 bg-violet-700  font-medium text-gray-100">
				<tr>
					<th class="py-3 px-6">Source</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-violet-700 text-violet-700 ">
				{#each experimentData.sources as item}
					<tr class="hover:bg-gray-100 ">
						<td class="whitespace-nowrap px-6 py-4">
							<a href={item.link}>{item.title}</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<section
	class="mx-auto w-full rounded-lg border-2 border-violet-700 p-6 shadow-md shadow-violet-700  md:px-8"
>
	<h2 class="mb-2 w-full text-center  text-7xl font-bold tracking-tighter  text-gray-100">
		Other extensions
	</h2>
	<div class="w-full mb-6 mb-4 grid  grid-cols-2 gap-2">
		{#each extensionsExperimentsToc.data as recommendation}
			<RecommendationBlock link="/app/extensions/experiments" {recommendation} />
		{/each}
	</div>
</section>
