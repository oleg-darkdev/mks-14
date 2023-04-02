<script>
	import {
		CountdownTimer,
		TextBlock,
		GameStepsBtns,
		FinalStepOnScreen,
		TimeCounterBlock
	} from '../../entities';
	import { HorisontalImage } from '../../shared';
	let step = 0, timeToEnd = 12;
</script>

<div class="flex h-full flex-col justify-center">
	<!-- -->

	{#if !step}
		<TextBlock
			title="Przedyskutujcie plan działania z pozostałymi graczami. "
			desc="Jak tylko naciśniesz przycisk start, gra się rozpoczyna i zaczyna się timer."
		>
			<HorisontalImage slot="img" img="./images/hero.png" alt=" Welcome banner" />
			<button
				slot="btn"
				class="btn-lg  btn mx-6 mt-4 max-w-2xl bg-violet-700"
				on:click={() => step++}>Rozpocząć grę</button
			>
			/>
		</TextBlock>
	{:else if step >= 1 && step <= 12}
		<TimeCounterBlock
			title="Przedyskutujcie plan działania z pozostałymi graczami. "
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<CountdownTimer slot="timer" bind:timeToEnd />
			<GameStepsBtns slot="btn" bind:step bind:timeToEnd/>
		</TimeCounterBlock>
	{:else if step == 13}
		<FinalStepOnScreen
			title="Final  game"
			desc={[
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
			]}
			btnText="Zacznij grę od nowa"
			on:click={() => {
				step = 0;
			}}
		/>
	{/if}
</div>
