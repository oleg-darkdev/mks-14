<script>
	import { LevelCard } from '../../../shared';

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

	let selectedMode;

	// save on store
	function selectMode(levelInfo) {
		selectedMode = levelInfo;
		step++;
	}

	export let step;
</script>

<div class="flex h-full flex-col items-center justify-center md:mx-auto">
	<h3 class="text-3xl font-semibold text-gray-300 sm:text-4xl">Setup map</h3>
	<div class="flex flex-row flex-wrap items-center ">
		{#each levelsList as levelInfo}
			<LevelCard on:click={() => selectMode(levelInfo)} {levelInfo} />
		{/each}
	</div>
</div>
