<script>
	import {
		StepsList,
		TextBlock,
		StepsBtns,
		MapGenerator,
		RolesSetup,
		LevelSecelect,
		FinalStepOnScreen
	} from '../../entities';

	const gameSteps = [
		{
			title: 'TextBlock L.O.R.',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		},
		{
			// игроки указывают количество участников - это повлияет на количество экспериментов и ресурсев
			// Игроки должны выбрать себе 1 персонажа, отложить его карточку в колоду проиществий.
			title: 'Wybór bohaterów',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		},
		{
			title: 'Сетап карты',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		},
		{
			title: 'Выберите уровень сложности',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		},
		{
			title: 'Количество экспериментов',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		},
		{
			title: 'Положите количество ресурсев на МКС',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		}
	];

	let step = 1;

	export let activeScreen;
</script>

<div class="flex h-full flex-col items-center justify-center pt-40 pb-10">
	{#if step == 1}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 2}
		<StepsList steps={gameSteps}>
			<StepsBtns bind:step />
		</StepsList>
	{:else if step == 3}
		<RolesSetup bind:step />
	{:else if step == 4}
		<TextBlock
			title="Setup map"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
		<MapGenerator />
	{:else if step == 5}
		<LevelSecelect bind:step />
	{:else if step == 6}
		<TextBlock
			title="Resources generator"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 7}
		<TextBlock
			title="Experiements generator"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</TextBlock>
	{:else if step == 8}
		<FinalStepOnScreen
			title="Final setup game"
			desc={[
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
			]}
			btnText="Got to instruction"
			on:click={() => {
				activeScreen = 'Instrukcja';
				step = 0;
			}}
		/>
	{/if}
</div>
