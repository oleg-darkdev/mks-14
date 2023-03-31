<script>
	import { page } from '$app/stores';
	import {
		mainTocData,
		personsTocData,
		locationsTocData,
		experimentsTocData,
    LargeBtn
	} from '../../../../lib/shared';
	import { TableOfСontents, BannerTableOfContent } from '../../../../lib/entities';

	$: toc =
		$page.params.slug == 'locations'
			? locationsTocData
			: $page.params.slug == 'persons'
			? personsTocData
			: $page.params.slug == 'experiments'
			? experimentsTocData
			: mainTocData;
</script>

<section
	class="flex h-full w-full flex-col items-center justify-center pt-20 pb-10 dark:bg-gray-900 dark:text-gray-100"
>
	<div class="container mx-auto max-w-6xl space-y-6 p-6 sm:space-y-12">
		<BannerTableOfContent page={$page.params.slug} {toc}/>
		<TableOfСontents {toc} />
	</div>
  <LargeBtn link='/app' text='Go Home'/>

</section>
