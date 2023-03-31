<script>
	import { StepElement } from '../../shared';
	$: stepsLength = steps.length - 1;

	export let steps;
</script>

<div
	class="mx-auto border border-violet-700 shadow-md shadow-violet-700 rounded-lg px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-4"
>
	<div class="mx-auto grid max-w-2xl">
		{#each steps as step, idStep}
			<StepElement {step} {idStep} {stepsLength} />
		{/each}

		<slot />
	</div>
</div>
