<script>
	import { Header } from '../../widgets';
	import { RecommendationBlock } from '../../entities/';
	import { mainTocData } from '../../shared';

	const headerLeftSideLinks = [
			{ link: '/', text: 'Home' }
			// { link: '', text: '' }
		],
		headerRightSideLinks = [
			{ link: '/app', text: 'App' }

			// { link: '', text: '' }
		];
	export let manualArticle;
</script>

<Header leftSideLinks={headerLeftSideLinks} rightSideLinks={headerRightSideLinks} />

<section>
	<article
		class="mx-auto bg-gray-900 p-2 text-gray-100  sm:p-10 md:min-h-screen md:p-4 md:p-16 lg:min-h-screen lg:p-5 xl:min-h-screen xl:p-5"
	>
		<div class="mx-auto flex max-w-3xl flex-col items-center overflow-hidden rounded">
			<img
				src={manualArticle.img}
				alt=""
				class="h-60 w-full max-w-md border-2 border-violet-700 bg-violet-700 shadow-md shadow-violet-700 sm:h-96"
			/>
			<div
				class="m-4 mx-auto -mt-16 space-y-6 border-2 border-violet-700 bg-gray-900 p-6 pb-12 shadow-md shadow-violet-700 sm:mx-12 sm:px-10 lg:max-w-2xl lg:rounded-md"
			>
				<div class="space-y-2">
					<h1 class="inline-block text-2xl font-semibold sm:text-3xl">
						#{manualArticle.id} {manualArticle.title}
					</h1>
				</div>
				<div class="text-gray-100">
					{#each manualArticle.fullDesc as fullDesc}
						<p>{fullDesc}</p>
					{/each}
				</div>
			</div>
		</div>
	</article>
</section>

<section class="flex flex-row justify-between bg-gray-900 p-2 pb-4 text-gray-50 mb-6">
	{#each mainTocData.data as recommendation}
		<RecommendationBlock {recommendation} />
	{/each}
</section>
