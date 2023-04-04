<script>
	import { StepsList, TableOfСontents, RecommendationBlock } from '../../entities';
	import { mainTocData, extensionsTocData } from '../../shared';
	import { page } from '$app/stores';

	const instrustionSteps = [
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		}
	];

	let reccomendations = [
		{
			title: 'synopsis',
			id: 'synopsis',
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc: 'Lorem ipsum is placeholder text commonly'
		}
	];



	$: toc = mainTocData;
</script>

<!-- <StepsList steps={instrustionSteps}/> -->

<div class="container mx-auto max-w-6xl space-y-6 p-2 md:p-4 lg:p-6 xl:p-6 ">
	<TableOfСontents {toc} />
</div>

<div class="mb-10">
	{#each reccomendations as recommendation}
		<RecommendationBlock link='mks-14' {recommendation} />
	{/each}
</div>


