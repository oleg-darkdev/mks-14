<script>
	import { StepItem } from '../../../entities';
  import {getGameData} from '../../../shared';

</script>

<section class="bg-gray-900 text-gray-100">
	<div class="container mx-auto flex flex-col p-6">
		<h2 class="py-4 text-center text-3xl font-bold">Jak dostać grę</h2>
		<div class="divide-y divide-violet-700">
			{#each getGameData as step}
				<StepItem {step} />
			{/each}
		</div>
	</div>
</section>
