<script>
	import { StepItem } from '../../../entities';

	const steps = [
		{
			title: 'Lorem ipsum dolor sit amet.',
			subtitle: 'dolor sit amet',
			desc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			],
			img: '',
			id: '1'
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			subtitle: 'dolor sit amet',
			desc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			],
			img: '',
			id: '2'
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			subtitle: 'dolor sit amet',
			desc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			],
			img: '',
			id: '3'
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			subtitle: 'dolor sit amet',
			desc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			],
			img: '',
			id: '4'
		}
	];
</script>

<section class="dark:bg-gray-900 dark:text-gray-100">
	<div class="container mx-auto flex flex-col p-6">
		<h2 class="py-4 text-center text-3xl font-bold">История изменений</h2>
		<div class="divide-y divide-violet-700">
			{#each steps as step}
				<StepItem {step} />
			{/each}
		</div>
	</div>
</section>
