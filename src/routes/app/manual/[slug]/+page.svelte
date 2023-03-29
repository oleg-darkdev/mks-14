<script>
	import { page } from '$app/stores';
	import {
		mainTocData,
		personsTocData,
		locationsTocData,
		experimentsTocData
	} from '../../../../lib/shared';
	import { TableOfСontents } from '../../../../lib/entities';

	$: toc =
		$page.params.slug == 'locations'
			? locationsTocData
			: $page.params.slug == 'persons'
			? personsTocData
			: $page.params.slug == 'experiments'
			? experimentsTocData
			: mainTocData;
</script>

<div class="flex h-full flex-col items-center justify-center pt-40 pb-10 p-2">
	<TableOfСontents {toc} />
	<a href='/app' class="btn-block btn btn-lg btn-info mt-4  max-w-2xl">Home</a>
</div>
