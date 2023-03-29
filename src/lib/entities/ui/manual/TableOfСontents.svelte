<script>
	export let toc;
</script>

<div
	class="container mx-auto flex h-full max-w-4xl bg-gray-800 flex-col items-center justify-center rounded-lg rounded-lg  shadow"
>

	<ul class="divide flex flex-col divide-y">
		{#each toc.data as navigation}
			<li class="flex flex-row">
				<a href='{toc.link}{navigation.id}' class="flex flex-1 cursor-pointer select-none items-center p-4">
					<div class="mr-4 flex h-30 w-30 flex-col items-center justify-center">
							<img
								alt="{navigation.id}"
								src={navigation.img}
								class="mx-auto relative block h-40 w-40 rounded-full object-cover "
							/>
					</div>
					<div class="xl:mr-16 lg:mr-16 md:mr-16 flex-1 pl-1">
						<div class="font-medium dark:text-white">{navigation.title}</div>
						<div class="text-sm text-gray-600 dark:text-gray-200">
							{#each navigation.desc as desc}
								<p>{desc}</p>
							{/each}
						</div>
					</div>
					<button class="flex w-10 justify-end text-right">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
							/>
						</svg>
					</button>
				</a>
			</li>
		{/each}
	</ul>
</div>
