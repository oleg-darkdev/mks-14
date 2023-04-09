<script>
  export let data, link;
</script>

<div
	class="max-w-2xl m-1  rounded-lg border-2 border-violet-700 bg-gray-900 p-6 p-4 shadow-md  shadow shadow-violet-700 sm:p-8"
>
	<div class="mb-4 flex items-center justify-between">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">{data.title}</h5>
		<a href='{link}{data.link}' class="text-sm font-medium text-violet-700 hover:underline dark:text-blue-500">
			View all
		</a>
	</div>
	<div class="flow-root">
		<ul class="divide-y divide-violet-700 ">
			{#each data ? data.data : data.data.splice(0, 5) as category}
				<li class="py-3 sm:py-4">
					<div class="flex items-center space-x-4">
						<div class="flex-shrink-0">
							<img class="h-20 w-20 rounded-lg" src={category.img} alt={category.title} />
						</div>
						<div class="min-w-0 flex-1">
							<p class="truncate text-sm font-medium text-gray-900 dark:text-white">
								{category.title}
							</p>
							<p class="truncate text-sm text-gray-500 dark:text-gray-400">
								{category.shortDesc}
							</p>
						</div>

						<div
							class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
						>
							{category.experimentsList.length}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
