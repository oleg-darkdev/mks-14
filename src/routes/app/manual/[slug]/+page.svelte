<script>
	import { page } from '$app/stores';
	import { identifySelectedData, LargeBtn } from '../../../../lib/shared';
	import { TableOfСontents, BannerTableOfContent } from '../../../../lib/entities';

	$: toc = identifySelectedData($page.params.slug);
</script>

<section
	class="flex h-full w-full flex-col items-center justify-center bg-gray-900 pt-20 pb-10 text-gray-100"
>
	<div class="container mx-auto max-w-6xl space-y-6 p-2 sm:space-y-12 md:p-4 lg:p-6 xl:p-6">
		<BannerTableOfContent page={$page.params.slug} {toc} />
		<TableOfСontents {toc} />
	</div>
	<LargeBtn link="/app" text="Back to instruction" />
</section>
