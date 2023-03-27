<script>
	import { LevelCard } from '../../shared';
	import { StepsList } from '../../entities';

	const levelsList = [
		{
			title: 'Easy',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
			id: 1,
			settings: {
				timer: '',
				color: '',
				experiments: '',
				resources: ''
			}
		},
		{
			title: 'Medium',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
			id: 2,
			settings: {
				timer: '',
				color: '',
				experiments: '',
				resources: ''
			}
		},
		{
			title: 'hard',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
			id: 3,
			settings: {
				timer: '',
				color: '',
				experiments: '',
				resources: ''
			}
		}
	];

	const gameSteps = [
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		},
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		},
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		},
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		}
	];

	// save on store
	function selectMode(levelInfo) {
		selectedMode = levelInfo;
		console.log(levelInfo);
	}

	export let selectedMode;
</script>

<StepsList steps={gameSteps} />

<div class="flex h-full flex-col justify-center">
	<h2 class="text-center text-2xl text-white">Hejka</h2>
	<div class="flex flex-row flex-wrap items-center ">
		{#each levelsList as levelInfo}
			<LevelCard on:click={() => selectMode(levelInfo)} {levelInfo} />
		{/each}
	</div>
</div>
