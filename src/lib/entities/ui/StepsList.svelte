<script>
	import { StepElement } from '../../shared';

	export let steps;

	$: stepsLength = steps.length - 1;
</script>

<div
	class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20"
>
	<div class="mx-auto grid max-w-2xl">
		{#each steps as step, idStep}
			<StepElement {step} {idStep} {stepsLength} />
		{/each}
	</div>
</div>
