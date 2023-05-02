<script>
	import { DarkPriceItem, LightPriceItem } from '../../../shared';

	const freePriceItems = [
		'Aplikacja internetowa',
		'Pliki do wydruku na drukarce papierowej',
		'Pliki do wydrukowania na drukarkę 3D',
		'Pliki do cięcia laserowego',
		'Linki do zamówień komponentów'
	];
	const deluxPriceItems = [
		'Aplikacja internetowa',
		'6 dodatkowych bohaterów',
		'Stojak na słuchawki w kształcie rakiety',
		'Laminowane nalepki do laptopów',
		'Pudełko podpisane przez autora'
	];
</script>

<section class="py-8 text-gray-50">
	<div
		class="container mx-auto flex flex-col items-center justify-center p-4 sm:p-10 md:w-full lg:w-8/12 lg:flex-row"
	>
		<div
			class="mb-6 flex flex-1 flex-col items-center justify-center rounded-lg border-2 border-violet-700 bg-gray-800 bg-gray-900 bg-gray-900 p-6 p-4 pb-8 shadow-md shadow-violet-700 sm:p-8 md:mb-0 md:rounded-tl-lg md:rounded-bl-lg lg:mb-0 lg:rounded-tl-lg lg:rounded-bl-lg lg:p-16 xl:mb-0 xl:rounded-tl-lg xl:rounded-bl-lg"
		>
			<span class="text-sm">Wersja podstawowa</span>
			<p class="text-center text-5xl font-bold">Bezpłatnie</p>
			<p class="text-center font-semibold">
				Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos
				voluptatibus sequi cum, non nesciunt aspernatur a?
			</p>
			<ul class="flex-1 px-2 py-6">
				{#each freePriceItems as item}
					<DarkPriceItem {item} />
				{/each}
			</ul>
			<a
				href="/"
				target="_blank"
				class="mt-2 rounded border border-gray-700 px-8 py-3 text-lg font-semibold sm:mt-12 hover:bg-violet-700">Pobieranie</a
			>
		</div>

		<div
			class="flex flex-1 flex-col items-center justify-center rounded-lg border-2 border-violet-700 bg-violet-700  p-4 pb-8 text-center text-gray-900 md:rounded-tr-lg md:rounded-br-lg lg:rounded-tr-lg lg:rounded-br-lg xl:rounded-tr-lg xl:rounded-br-lg "
		>
			<span class="text-sm font-semibold">Wersja Delux</span>
			<p class="text-5xl font-bold">69€</p>
			<p class="font-semibold">
				Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos
				voluptatibus sequi cum, non nesciunt aspernatur a?
			</p>
			<ul class="flex-1 px-2 py-8">
				{#each deluxPriceItems as item}
					<LightPriceItem {item} />
				{/each}
			</ul>

			<a
				href="/"
				target="_blank"
				class="mt-6 rounded bg-gray-900 px-8 py-3 text-lg font-semibold text-gray-50 sm:mt-1 hover:bg-gray-100 hover:text-gray-900">Kupić</a
			>
		</div>
	</div>
</section>
