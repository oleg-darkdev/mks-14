<script>
	import { ReviewCard } from '../../../entities';

	const reviews = [
		{
			img: 'https://source.unsplash.com/50x50/?portrait?1',
			position: 'CTO of Company Co.',
			fullName: 'Lorem ipsum ',
			title: 'Lorem ipsum dolor sit amet',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			img: 'https://source.unsplash.com/50x50/?portrait?2',
			position: 'CTO of Company Co.',
			fullName: 'Lorem ipsum ',
			title: 'Lorem ipsum dolor sit amet',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
		},
		{
			img: 'https://source.unsplash.com/50x50/?portrait?3',
			position: 'CTO of Company Co.',
			fullName: 'Lorem ipsum ',
			title: 'Lorem ipsum dolor sit amet',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			img: 'https://source.unsplash.com/50x50/?portrait?4',
			position: 'CTO of Company Co.',
			fullName: 'Lorem ipsum ',
			title: 'Lorem ipsum dolor sit amet',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
		}
	];
</script>

<section class="dark:bg-violet-800 dark:text-gray-100">
	<div class="container mx-auto px-6 py-12">
		<div class="grid items-center gap-4 xl:grid-cols-5">
			<div class="mx-auto my-8 max-w-2xl space-y-4 text-center xl:col-span-2 xl:text-left">
				<h2 class="text-4xl font-bold">Feedback</h2>
				<p class="dark:text-gray-400">
					Игра протестирована на тестовой группе, а так же среди учёных из космического сообщества.
				</p>
			</div>
			<div class="p-6 xl:col-span-3">
				<div class="grid gap-4 md:grid-cols-2">
					<div class="grid content-center gap-4">
						<ReviewCard review={reviews[0]} />
						<ReviewCard review={reviews[1]} />
					</div>
					<div class="grid content-center gap-4">
						<ReviewCard review={reviews[2]} />
						<ReviewCard review={reviews[3]} />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
