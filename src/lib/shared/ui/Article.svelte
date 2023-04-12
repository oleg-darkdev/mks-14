<script>
	import { Header } from '../../widgets';
	import { RecommendationBlock } from '../../entities/';
	import { mainTocData, headerLinks } from '../../shared';

  export let manualArticle;
</script>

<Header links={headerLinks} />

<section>
	<article
		class="flex justify-center bg-gray-900 p-2 text-gray-100  p-10 md:min-h-screen md:p-16 lg:min-h-screen lg:p-5 xl:min-h-screen xl:p-5"
	>
		<div class="pt-60 flex max-w-3xl flex-col items-center overflow-hidden rounded">
			<img
				src={manualArticle.img}
				alt=""
				class="h-60 w-full rounded-lg max-w-md border-2 border-violet-700 bg-violet-700 shadow-md shadow-violet-700 sm:h-96"
			/>
			<div
				class="m-4 mx-auto -mt-16 space-y-6 border-2 border-violet-700 bg-gray-900 p-6 pb-12 shadow-md shadow-violet-700 sm:mx-12 sm:px-10 lg:max-w-2xl lg:rounded-md"
			>
				<div class="space-y-2">
					<h1 class="inline-block text-4xl font-semibold">
						#{manualArticle.id}
						{manualArticle.title}
					</h1>
				</div>
				<slot />
				<div class="text-gray-100">
					{#each manualArticle.fullDesc as fullDesc}
						<p class='my-2'>{fullDesc}</p>
					{/each}
				</div>
			</div>
		</div>
	</article>
</section>


<slot name='sources' />
<section class="mb-6 flex flex-row flex-wrap justify-center bg-gray-900 p-2 pb-4 text-gray-50">
	{#each mainTocData.data as recommendation}
		<RecommendationBlock link="/app/manual" {recommendation} />
	{/each}
</section>
