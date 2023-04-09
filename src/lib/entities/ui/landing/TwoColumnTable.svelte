<script>
  export let data;
  
	let showAll = false;
</script>

<div class="max-w-2xl  rounded-lg border-2 border-violet-700 p-6 shadow-md shadow-violet-700">
	<h3 class="text-xl font-bold text-violet-700 sm:text-2xl">Box set</h3>
	<p class="mt-2 text-gray-400">
		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
	</p>

	<div
		class="mt-4 mb-6 overflow-x-auto rounded-lg border border-violet-700  shadow-md  shadow-violet-700"
	>
		<table class="w-full table-auto text-left text-sm">
			<thead class="border-b border-b-violet-700 bg-violet-700  font-medium text-gray-100">
				<tr>
					<th class="py-3 px-6">title</th>
					<th class="py-3 px-6">amount</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-violet-700 text-violet-700 ">
				{#each showAll ? data : data.splice(0, 3) as item}
					<tr class="hover:bg-gray-100 ">
						<td class="whitespace-nowrap px-6 py-4">{item.title}</td>
						<td class="whitespace-nowrap px-6 py-4">{item.amount}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="mb-12 flex items-center justify-center">
		<button on:click={() => (showAll = !showAll)} class="btn-wide btn bg-violet-700"
			>Show all</button
		>
	</div>
</div>
