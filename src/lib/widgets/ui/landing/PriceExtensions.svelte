<script>
	let showFull = false;

	export let extensions, link;
	// console.log(extensions);
</script>

<div
	class="container mx-auto my-4 max-w-5xl overflow-x-auto rounded-lg border-2 border-violet-700 bg-gray-900 p-6 shadow-md shadow-violet-700 "
>
	<table class="w-full">
		<caption class="sr-only">Pricing plan comparison</caption>
		<thead>
			<tr>
				<th />
				<th scope="col">
					<h2 class="px-2 text-lg font-medium">Nazwa dodatku</h2>
				</th>
				<th scope="col">
					<h2 class="px-2 text-lg font-medium">Do 10 kartek</h2>
					<p class="mb-3">
						<span class="text-2xl font-bold text-gray-50 sm:text-4xl">4.99€</span>
						<!-- <span class="font-medium text-gray-400">/mo</span> -->
					</p>
				</th>
				<th scope="col">
					<h2 class="px-2 text-lg font-medium">Do 20 kartek</h2>
					<p class="mb-3">
						<span class="text-2xl font-bold text-gray-50 sm:text-4xl">9€</span>
					</p>
				</th>
				<th scope="col">
					<h2 class="px-2 text-lg font-medium">Do 35 kartek</h2>
					<p class="mb-3">
						<span class="text-2xl font-bold text-gray-50 sm:text-4xl">16€</span>
					</p>
				</th>
				<th scope="col">
					<h2 class="px-2 text-lg font-medium">Do 50 kart</h2>
					<p class="mb-3">
						<span class="text-2xl font-bold text-gray-50 sm:text-4xl">29€</span>
					</p>
				</th>
				<th scope="col">
					<h2 class="px-2 text-lg font-medium">Wielki dodatek</h2>
					<p class="mb-3">
						<span class="text-2xl font-bold text-gray-50 sm:text-4xl">38€</span>
					</p>
				</th>
			</tr>
		</thead>
		<tbody class="space-y-6 divide-y divide-gray-700 text-center ">
			{#each showFull ? extensions.data : extensions.data.slice(0, 4) as extension}
				<tr style="" class="h-24 ">
					<a href="{link}/{extension.id}" target="_blank" class=" ">
						<td class="py-auto text-left">
							<img src={extension.img} class="h-20 w-20 rounded-lg" alt="" />
						</td>
					</a>
					<td class="py-auto text-left">
						<a href="/" target="_blank" class=" ">
							<h3 class="text-2xl">{extension.title}</h3>
							<p class="text-violet-700 ">
								<span class="text-gray-100">{extension.extensionData.data.length}</span> kart w zestawie
							</p>
						</a>
					</td>
					{#each extension.priceCategory as item}
						{#if item}
							<td class="py-auto flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 100 100"
									fill="currentColor"
									aria-label="Included in Standard plan"
									class="mx-auto h-20 w-auto "
								>
									<defs>
										<style>
											.cls-1 {
												fill: #fff;
											}
											.cls-2 {
												fill: #4f4495;
											}
										</style>
									</defs>
									<path
										class="cls-1"
										d="M57.8,22.37v8a1.16,1.16,0,0,1-1.09,1.08A23.77,23.77,0,0,0,33,55.1a1.09,1.09,0,0,1-2.17,0,26.2,26.2,0,0,1,25-26V22.19a32.74,32.74,0,0,0,0,65.45v-8A1.16,1.16,0,0,1,56.9,78.6,23.77,23.77,0,0,0,80.58,54.92a1.09,1.09,0,1,1,2.17,0,26.19,26.19,0,0,1-25,26v6.87a32.74,32.74,0,0,0,0-65.45ZM74.25,51.66,52,74.08a1.36,1.36,0,0,1-.72.36.94.94,0,0,1-.72-.36L39.36,62.87a5.62,5.62,0,0,1,8-7.95l4,4L66.48,43.71a5.61,5.61,0,0,1,9.58,4A5.78,5.78,0,0,1,74.25,51.66Z"
									/>
									<path
										class="cls-2"
										d="M70.27,44.25a3.47,3.47,0,0,0-2.35.9L52,61.06a1.36,1.36,0,0,1-.72.36.94.94,0,0,1-.72-.36l-5.06-4.7a3,3,0,0,0-2.35-.9,3.43,3.43,0,0,0-2.35.9,3,3,0,0,0-.91,2.35,3.39,3.39,0,0,0,.91,2.35l10.3,10.31L72.63,49.85a3,3,0,0,0,.9-2.35,3.09,3.09,0,0,0-3.26-3.25Z"
									/>
									<path
										class="cls-2"
										d="M103,55.1a46.29,46.29,0,1,0-46.29,46.28A46.38,46.38,0,0,0,103,55.1ZM56.71,90.17A35.08,35.08,0,1,1,91.79,55.1,35.11,35.11,0,0,1,56.71,90.17Z"
									/>
									<path
										class="cls-2"
										d="M9.35,82.22A2.35,2.35,0,1,1,7,84.57,2.35,2.35,0,0,1,9.35,82.22Z"
									/>
									<path
										class="cls-2"
										d="M104.26,82.22a2.35,2.35,0,1,1-2.35,2.35A2.35,2.35,0,0,1,104.26,82.22Z"
									/>
									<path
										class="cls-2"
										d="M104.26,23.46a2.35,2.35,0,1,1-2.35,2.35A2.35,2.35,0,0,1,104.26,23.46Z"
									/>
									<path
										class="cls-2"
										d="M9.35,25.63A2.35,2.35,0,1,1,7,28,2.35,2.35,0,0,1,9.35,25.63Z"
									/>
									<path
										class="cls-2"
										d="M22.91,100.3a2.35,2.35,0,1,1-2.35,2.35A2.35,2.35,0,0,1,22.91,100.3Z"
									/>
									<path
										class="cls-2"
										d="M88.35,3A2.35,2.35,0,1,1,86,5.38,2.36,2.36,0,0,1,88.35,3Z"
									/>
									<path class="cls-2" d="M17.12,20a6.87,6.87,0,1,0-6.87-6.87A7,7,0,0,0,17.12,20Z" />
									<path
										class="cls-2"
										d="M92.87,94.69a5.61,5.61,0,1,0,5.61,5.61A5.63,5.63,0,0,0,92.87,94.69Z"
									/>
								</svg>
							</td>
						{:else}
							<td> - </td>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="flex w-full justify-center">
		<button
			on:click={() => (showFull = !showFull)}
			class="btn-lg btn mx-6 mt-4 w-full max-w-md bg-violet-700"
		>
			{showFull ? 'Ukryj': 'Pokazać'} {extensions.data.length} dodatków</button
		>
	</div>
</div>
