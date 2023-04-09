<script>
	import { ShortListOfExtensions, TwoColumnTable } from '../../entities';
	import {
		gameComplect,
		extensionsExperimentsToc,
	} from '../../shared';
</script>

<section class="mx-auto mt-12 flex flex-col items-center  md:px-8">
	<TwoColumnTable data={gameComplect} />

	<div
		class="mt-12 mb-12 flex flex-row flex-wrap items-center justify-between rounded-lg border-2 border-violet-700 p-6 shadow-md shadow-violet-700"
	>
		<ShortListOfExtensions data={extensionsExperimentsToc} link="" />
		<ShortListOfExtensions data={extensionsExperimentsToc} link="" />
	</div>
</section>
