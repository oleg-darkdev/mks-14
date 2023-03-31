<script>
	export let toc;
</script>

<div class="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each toc.data as navigation}
		<a
			rel="noopener noreferrer"
			href="{toc.link}{navigation.id}"
			class="group mx-auto max-w-sm border-2 border-violet-700 shadow-md shadow-violet-700 hover:no-underline focus:no-underline dark:bg-gray-900"
		>
			<img
				role="presentation"
				class="h-44 w-full rounded object-cover dark:bg-gray-500"
				src={navigation.img}
				alt={navigation.id}
			/>
			<div class="space-y-2 p-6">
				<h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
					{navigation.title}
				</h3>
				<p>{navigation.shortDesc}</p>
			</div>
		</a>
	{/each}
</div>

