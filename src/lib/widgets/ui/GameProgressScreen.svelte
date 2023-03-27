<script>
	import { CountdownTimer, TextBlock, StepsBtns } from '../../entities';

	let step = 1;
</script>

<div class="flex h-full flex-col justify-center">
	<!-- <TextBlock
		title="Lorem ipsum is placeholder"
		desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
	>
		<StepsBtns bind:step />
	</TextBlock>

	<CountdownTimer /> -->

	{#if step == 1}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 2}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 3}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 4}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 5}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 6}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 7}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 8}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 9}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 10}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 11}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 12}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{/if}
</div>
