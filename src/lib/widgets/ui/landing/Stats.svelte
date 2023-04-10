<script>
	import { StatElement } from '../../../shared/';

	const stats = [
		// {
		// 	id: 'scifi',
		// 	title: 'Hard Sci-fi',
		// 	img: '/images/stats/stats_scifi.svg',
    //   count: '+'
		// },
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
      count: "30+"
		}
	];
</script>

<section class="bg-violet-700 p-6 text-gray-100">
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-1 xl:grid-cols-3 container mx-auto ">
		{#each stats as stat}
			<StatElement {stat} />
		{/each}
	</div>
</section>

<!-- extensions -->
