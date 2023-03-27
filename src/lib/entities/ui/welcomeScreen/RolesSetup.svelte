<script>

	const variantsPeoplesOnGame = [2, 3, 4];

	let peoplesOnGame = 2;

  export let step;
</script>

<div class="py-14">
	<div class="mx-auto max-w-screen-xl px-4 md:px-8 md:text-center">
		<div class="max-w-xl md:mx-auto mb-4">
			<h3 class="text-3xl font-semibold text-gray-300 sm:text-4xl">Roles setup</h3>
			<p class="mt-3 text-gray-300">
				Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups.
			</p>
		</div>

		<div class="grid auto-cols-max grid-flow-col justify-center  gap-5 text-center">
			{#each variantsPeoplesOnGame as variant}
				<button
					on:click={() => {
            peoplesOnGame = variant;
            step++;
          }}
					class="rounded-box flex flex-col items-center bg-neutral p-2 text-neutral-content "
				>
					<span class="font-mono countdown text-center text-5xl">
						{variant}
					</span>
					<span> peolpes </span>
				</button>
			{/each}
		</div>

	</div>
</div>
