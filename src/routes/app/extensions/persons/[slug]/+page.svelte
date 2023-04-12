<script>
	import { page } from '$app/stores';
	import Header from '../../../../../lib/widgets/ui/Header.svelte';
	import { extensionsExperimentsToc, headerAppLinks } from '../../../../../lib/shared';
	import { TableOfСontents, BannerTableOfContent } from '../../../../../lib/entities';

	const getExtensionData = (textArray) => textArray.data[$page.params.slug - 1];

	const extensionData = getExtensionData(extensionsExperimentsToc);
</script>

<Header links={headerAppLinks} />

<section
	class="flex h-full w-full flex-col items-center justify-center bg-gray-900 pt-20 pb-10 text-gray-100"
>
	<div
		class="mt-6 mt-24 mb-10 mb-6 rounded-lg border-2 border-violet-700 p-6 shadow-md shadow-violet-700"
	>
		<div class="container mx-auto max-w-6xl space-y-6 p-2 sm:space-y-12 md:p-4 lg:p-6 xl:p-6">
			<BannerTableOfContent page={'Extension'} toc={extensionData.extensionData} />
			<h2 class="text-7xl font-semibold text-violet-700 text-center ">Extensions: Experiments</h2>
			<TableOfСontents toc={extensionData.extensionData} />
		</div>
	</div>
</section>
