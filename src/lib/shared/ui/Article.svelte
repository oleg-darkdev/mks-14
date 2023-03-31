<script>
	import { Header } from '../../widgets';
	import { RecommendationBlock } from '../../entities/';
import { mainTocData } from '../../shared';

	// const recommendations = [
	// 	{
	// 		img: '',
	// 		link: '/app/locations/',
	// 		title: 'Lorem ipsum dolor sit amet, consectetur.',
	// 		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	// 	},
	// 	{
	// 		img: '',
	// 		link: '/app/persons/',
	// 		title: 'Lorem ipsum dolor sit amet, consectetur.',
	// 		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	// 	},
	// 	{
	// 		img: '',
	// 		link: '/app/locations/',
	// 		title: 'Lorem ipsum dolor sit amet, consectetur.',
	// 		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	// 	},
	// ];

	const headerLeftSideLinks = [
			{ link: '/', text: 'Home' },
			// { link: '', text: '' }
		],
		headerRightSideLinks = [
			{ link: '/app', text: 'App' },

			// { link: '', text: '' }
		];
	export let manualArticle;
</script>

<Header leftSideLinks={headerLeftSideLinks} rightSideLinks={headerRightSideLinks} />

<section>
	<article class="mx-auto min-h-screen p-5 dark:bg-gray-900 dark:text-gray-100 sm:p-10 md:p-16">
		<div class="mx-auto flex max-w-3xl flex-col items-center overflow-hidden rounded">
			<img
				src={manualArticle.img}
				alt=""
				class="h-60 w-full max-w-md border-2 border-violet-700 shadow-md shadow-violet-700 dark:bg-violet-700 sm:h-96"
			/>
			<div
				class="m-4 mx-auto -mt-16 space-y-6 border-2 border-violet-700 p-6 pb-12 shadow-md shadow-violet-700 dark:bg-gray-900 sm:mx-12 sm:px-10 lg:max-w-2xl lg:rounded-md"
			>
				<div class="space-y-2">
					<h1 class="inline-block text-2xl font-semibold sm:text-3xl">
						#{manualArticle.id} location - {manualArticle.title}
					</h1>
				</div>
				<div class="dark:text-gray-100">
					{#each manualArticle.fullDesc as fullDesc}
						<p>{fullDesc}</p>
					{/each}
				</div>
			</div>
		</div>
	</article>
</section>

<section class="pb-20 flex flex-col dark:bg-gray-900 dark:text-gray-50 ">
	{#each mainTocData.data as recommendation}
		<RecommendationBlock {recommendation} />
	{/each}
</section>
