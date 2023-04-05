<script>
	import { Article } from '../../../../lib/shared/';
	import { page } from '$app/stores';
	import { getCurrentUrl, getLocationFromUrl, identifySelectedData } from '../../../../lib/shared/';

	const locationValue = getLocationFromUrl(getCurrentUrl(window)),
		textArray = identifySelectedData(locationValue),
		getThisArticleText = (textArray) => textArray.data[$page.params.slug - 1];

  const experimentData = getThisArticleText(textArray)
</script>

<Article manualArticle={experimentData} />

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
              <a href="{item.link}">{item.title}</a>
            </td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
