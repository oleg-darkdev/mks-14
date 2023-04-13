<script>
	import { page } from '$app/stores';
	import { extensionsExperimentsToc } from '../../../../../lib/shared';
	import { TableOfСontents, BannerTableOfContent } from '../../../../../lib/entities';
	import { FooterLanding as Footer } from '../../../../../lib/widgets';

	const getExtensionData = (textArray) => textArray.data[$page.params.slug - 1];

	const extensionData = getExtensionData(extensionsExperimentsToc);
</script>

<section
	class="flex h-full w-full flex-col items-center justify-center bg-gray-900 pt-20 pb-10 text-gray-100"
>
	<div
		class="mt-6 mb-10 mb-6 rounded-lg border-2 border-violet-700 p-6 shadow-md shadow-violet-700"
	>
		<div class="container mx-auto mt-24 max-w-6xl space-y-6 p-2 sm:space-y-12 md:p-4 lg:p-6 xl:p-6">
			<BannerTableOfContent page={'Extension'} toc={extensionData.extensionData} />
			<h2 class="text-center text-7xl font-semibold text-violet-700 ">Extensions: Experiments</h2>
			<TableOfСontents toc={extensionData.extensionData} />
		</div>
	</div>
</section>

<Footer />
