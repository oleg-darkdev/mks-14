<script>
	import { CountdownTimer, Welcome, StepsBtns } from '../../entities';

	let step = 1;
</script>

<div class="flex h-full flex-col justify-center">
	<Welcome
		title="Lorem ipsum is placeholder"
		desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
	>
		<StepsBtns bind:step />
	</Welcome>
	<div class="flex flex-row flex-wrap items-center ">
		<!-- {#each levelsList as levelInfo}
			<LevelCard on:click={() => selectMode(levelInfo)} {levelInfo} />
		{/each} -->
		<CountdownTimer />
	</div>
</div>
