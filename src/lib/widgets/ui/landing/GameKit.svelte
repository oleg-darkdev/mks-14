<script>
	const gameSet = [
		{
			title: 'Карты проишествий',
			amount: 24
		},
		{
			title: 'Карты проишествий персонажей',
			amount: 9
		},
		{
			title: 'Карт экспериментов',
			amount: 40
		},
		{
			title: 'Жетоны рем наборов',
			amount: 5
		},
		{
			title: 'Жетоны аккумуляторов',
			amount: 5
		},
		{
			title: 'Жетоны солнечных панелей',
			amount: 5
		},
		{
			title: 'Жетона гидропоники',
			amount: 5
		},
		{
			title: 'Жёлтых ресурсев энергии',
			amount: 5
		},
		{
			title: 'Синих ресурсев воды',
			amount: 5
		},
		{
			title: 'Зелёных ресурсев еды',
			amount: 5
		},
		{
			title: 'Красных ресурсев науки',
			amount: 5
		},
		{
			title: 'Тайлов внутренних локаций',
			amount: 8
		},
		{
			title: 'Тайлов внешних локаций',
			amount: 6
		},
		{
			title: 'Календарь',
			amount: 1
		},
		{
			title: 'Песочный таймер',
			amount: 1
		},
		{
			title: 'Тайла ракет',
			amount: 2
		},
		{
			title: 'Фигурка ракеты',
			amount: 1
		}
	];

	let showAll = false;
</script>

<section
	class="mx-auto  max-w-2xl rounded-lg border-2 border-violet-700 p-6 shadow-md shadow-violet-700  md:px-8"
>
	<div class="max-w-lg">
		<h3 class="text-xl font-bold text-violet-700 sm:text-2xl">Box set</h3>
		<p class="mt-2 text-gray-400">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		</p>
	</div>
	<div
		class="mt-4 mb-6 overflow-x-auto rounded-lg border border-violet-700  shadow-md  shadow-violet-700"
	>
		<table class="w-full table-auto text-left text-sm">
			<thead class="border-b border-b-violet-700 bg-violet-700  font-medium text-gray-100">
				<tr>
					<th class="py-3 px-6">title</th>
					<th class="py-3 px-6">amount</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-violet-700 text-violet-700 ">
				{#each showAll ? gameSet : gameSet.splice(0, 5) as item}
					<tr class="hover:bg-gray-100 ">
						<td class="whitespace-nowrap px-6 py-4">{item.title}</td>
						<td class="whitespace-nowrap px-6 py-4">{item.amount}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="flex items-center justify-center">
		<button on:click={() => (showAll = !showAll)} class="btn-wide btn bg-violet-700"
			>Show all</button
		>
	</div>
</section>
