<script>
	import { LargeBtn, extensionsExperimentsToc, extensionsPersonsToc } from '../../../lib/shared';
	import { TableOfСontents, BannerTableOfContent } from '../../../lib/entities';
</script>

<section
	class="flex h-full w-full flex-col items-center justify-center bg-gray-900 pt-20 pb-10 text-gray-100"
>
	<div
		class="mt-6 mb-10 mb-6 rounded-lg border-2 border-violet-700 p-6 shadow-md shadow-violet-700"
	>
		<div class="container mx-auto max-w-6xl space-y-6 p-2 sm:space-y-12 md:p-4 lg:p-6 xl:p-6">
			<BannerTableOfContent page={'Extensions'} toc={extensionsExperimentsToc} />
			<h2 class="text-7xl font-semibold text-violet-700">Extensions: Experiments</h2>
			<TableOfСontents toc={extensionsExperimentsToc} />
		</div>
	</div>

	<div class="mt-6 rounded-lg border-2 border-violet-700 p-6 shadow-md shadow-violet-700">
		<div class="container mx-auto max-w-6xl space-y-6 p-2 sm:space-y-12 md:p-4 lg:p-6 xl:p-6">
			<BannerTableOfContent page={'Persons'} toc={extensionsPersonsToc} />
			<h2 class="text-7xl font-semibold text-violet-700">Extensions: Persons</h2>

			<TableOfСontents toc={extensionsPersonsToc} />
		</div>
	</div>

	<LargeBtn link="/app" text="Back to instruction" />
</section>
