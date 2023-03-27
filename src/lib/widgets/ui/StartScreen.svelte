<script>
	import {
		StepsList,
		Welcome,
		StepsBtns,
		ExperimentsGenerator,
		ResourcesGenerator,
		MapSetup,
		MapGenerator,
		RolesSetup,
		LevelSecelect
	} from '../../entities';

	const gameSteps = [
		{
			title: 'Welcome L.O.R.',
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
</script>

<div class="flex h-full flex-col items-center justify-center pt-40 pb-10">
	{#if step == 1}
		<Welcome
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns bind:step />
		</Welcome>
	{:else if step == 2}
		<StepsList steps={gameSteps}>
			<StepsBtns bind:step />
		</StepsList>
	{:else if step == 3}
		<RolesSetup bind:step />
	{:else if step == 4}
		<MapSetup>
			<StepsBtns bind:step />
		</MapSetup>
		<MapGenerator />
	{:else if step == 5}
		<LevelSecelect bind:step  />
	{:else if step == 6}
		<ExperimentsGenerator>
			<StepsBtns bind:step />
		</ExperimentsGenerator>
	{:else if step == 7}
		<ResourcesGenerator>
			<StepsBtns bind:step />
		</ResourcesGenerator>
	{/if}
</div>
