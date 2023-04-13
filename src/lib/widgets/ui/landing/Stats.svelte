<script>
	import { StatElement } from '../../../shared/';

	const stats = [
		{
			id: 'astronauts',
			title: 'Astronauts',
			img: '/images/stats/stats_astronauts.svg',
			count: 160
		},
		{
			id: 'experiments',
			title: 'Experiments',
			img: '/images/stats/stats_experiments.svg',
			count: 480
		},
		{
			id: 'extensions',
			title: 'Extensions',
			img: '/images/stats/stats_extensions.svg',
			count: 30
		}
	];
</script>

<section class="bg-violet-700 p-2 py-12 text-gray-100">
	<div class="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-1 xl:grid-cols-3 ">
		{#each stats as stat}
			<StatElement {stat} />
		{/each}
	</div>
</section>
