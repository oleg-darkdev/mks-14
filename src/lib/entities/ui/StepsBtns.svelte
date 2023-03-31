<script>
	const stepIncrease = () => step++;
	const stepDecrease = () => step--;

	export let step;
</script>

<div class="flex w-full flex-row flex-wrap justify-center">
	{#if step != 1}
		<button
			on:click={() => stepDecrease()}
			class="m-2 inline-block rounded-lg bg-gray-900 py-2 px-4 font-medium text-white shadow-md duration-150 hover:bg-gray-700 hover:shadow-none active:bg-gray-900"
		>
			Back
		</button>
	{/if}

	<button
		on:click={() => stepIncrease()}
		class="m-2 inline-block rounded-lg bg-gray-900 py-2 px-4 font-medium text-white shadow-md duration-150 hover:bg-gray-700 hover:shadow-none active:bg-gray-900"
	>
		Next
	</button>
</div>
