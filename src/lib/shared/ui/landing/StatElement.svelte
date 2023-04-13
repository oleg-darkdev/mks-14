<script>
	import { CountUp } from 'countup.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const astronautsCountUp = new CountUp('astronauts', 160, {
				enableScrollSpy: true,
				duration: 6
			}),
			experimentsCountUp = new CountUp('experiments', 480, { enableScrollSpy: true, duration: 6 }),
			extensionsCountUp = new CountUp('extensions', 30, { enableScrollSpy: true, duration: 6 });
	});

	export let stat;
</script>

<div class="flex space-x-4 rounded-lg bg-gray-900 p-4 text-gray-100 md:space-x-6">
	<div class="flex justify-center rounded-lg bg-violet-700 p-1 align-middle sm:p-2">
		<img src={stat.img} class="h-20 w-20" alt={stat.title} />
	</div>
	<div class="flex flex-col justify-center align-middle text-violet-400">
		<p id={stat.id} class="text-6xl font-semibold leading-none">{stat.count}</p>
		<p class="capitalize">{stat.title}</p>
	</div>
</div>
