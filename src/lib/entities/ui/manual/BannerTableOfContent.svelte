<script>
	export let toc, page;
</script>

<div
	class="mx-auto block max-w-sm gap-3 rounded-xl border-2 border-violet-700 shadow-md shadow-violet-700 hover:no-underline focus:no-underline dark:bg-gray-900 sm:max-w-full lg:grid lg:grid-cols-12"
>
	<img
		src={toc.img}
		alt="{page} banner"
		class="h-64 w-full  object-cover dark:bg-violet-700 sm:h-96 lg:col-span-7"
	/>
	<div class="space-y-2 p-6 lg:col-span-5">
		<h3 class="text-2xl font-semibold  sm:text-4xl">
			Описание {page} доступных в игре
		</h3>
		<ul>
			{#each toc.data as item}
				<li class="">
					<a class="hover:text-violet-700" href="{toc.link}{item.id}">{item.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	li {
		list-style: none;
	}

	li::before {
		content: '\2022';
		color: #661ae6;
		font-weight: bold;
		display: inline-block;
		width: 1em;
		margin-left: -1em;
	}
</style>
