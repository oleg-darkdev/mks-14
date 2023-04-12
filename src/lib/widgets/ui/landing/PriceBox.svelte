<script>
	import { DarkPriceItem, LightPriceItem } from '../../../shared';

	const freePriceItems = ['Web-app'];
	const basicPriceItems = ['Web-app'];
</script>

<section class="py-6  text-gray-50">
	<div
		class="container mx-auto flex flex-col items-center justify-center p-4 sm:p-10 md:w-full lg:w-8/12 lg:flex-row"
	>
		<div
			class="flex flex-1 flex-col items-center justify-center rounded-tl-lg rounded-bl-lg border-2 border-violet-700 bg-gray-800 bg-gray-900 bg-gray-900 p-6 p-4 pb-8 shadow-md shadow-violet-700 sm:p-8 lg:p-16"
		>
			<span class="text-sm">Basic</span>
			<p class="text-center text-5xl font-bold">Free</p>
			<p class="text-center font-semibold">
				Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos
				voluptatibus sequi cum, non nesciunt aspernatur a?
			</p>
			<ul class="flex-1 px-2 py-8">
				{#each freePriceItems as item}
					<DarkPriceItem {item} />
				{/each}
			</ul>
			<a
				href="/"
				target="_blank"
				class="mt-6 rounded border border-gray-700 px-8 py-3 text-lg font-semibold sm:mt-12">Buy</a
			>
		</div>
		<div
			class="flex flex-1 flex-col items-center justify-center rounded-tr-lg rounded-br-lg border-2 border-violet-700 bg-violet-700 p-4 pb-8 text-center text-gray-900 sm:p-8 lg:p-16"
		>
			<span class="text-sm font-semibold">Advanced</span>
			<p class="text-5xl font-bold">89€</p>
			<p class="font-semibold">
				Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos
				voluptatibus sequi cum, non nesciunt aspernatur a?
			</p>
			<ul class="flex-1 px-2 py-8">
				{#each basicPriceItems as item}
					<LightPriceItem {item} />
				{/each}
			</ul>

			<a
				href="/"
				target="_blank"
				class="mt-6 rounded bg-gray-900 px-8 py-3 text-lg font-semibold text-gray-50 sm:mt-1">Buy</a
			>
		</div>
	</div>
</section>
