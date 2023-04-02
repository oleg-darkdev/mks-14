<script>
	const stepIncrease = () => {
		timeToEnd--;
		step++;
	};

	export let step, timeToEnd;
</script>

<div class="flex w-full flex-row flex-wrap justify-center">
	<button
		on:click={() => stepIncrease()}
		class="m-2 inline-block rounded-lg bg-violet-700 py-2 px-4 font-medium text-white shadow-md duration-150 hover:bg-gray-100 hover:bg-gray-700 hover:text-gray-900 hover:shadow-none active:bg-gray-900"
	>
		Next
	</button>
</div>
