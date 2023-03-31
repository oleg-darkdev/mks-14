<script>
	import { locationsList, generateMap, shuffle } from '../../../shared/';

	const airLockLeft = locationsList.airLockLeft,
		airLockRight = locationsList.airLockRight;

	const locationsNumbers = [
		locationsList.cargoFirst.id,
		locationsList.center.id,
		locationsList.laboratory.id,
		locationsList.batteries.id,
		locationsList.lounge.id,
		locationsList.cargoSecond.id
	];
	const topOuther = [
			locationsList.topOutherRight.id,
			locationsList.topOutherCenter.id,
			locationsList.topOutherLeft.id
		],
		bottomOuther = [
			locationsList.bottomOutherRight.id,
			locationsList.bottomOutherCenter.id,
			locationsList.bottomOutherLeft.id
		];

	let mapGrid = generateMap(shuffle(locationsNumbers));
</script>

<div class="flex w-full flex-row justify-center text-white">
	<div class="flex h-10 w-10 items-center pt-4"><span>{airLockLeft.id}</span></div>
	{#each mapGrid as grid, i}
		<div class="flex h-10 w-10 flex-col">
			<span>{topOuther[i]}</span>
			<span>{grid[0]}</span>
			<span>{grid[1]}</span>
			<span>{bottomOuther[i]}</span>
		</div>
	{/each}
	<div class="flex h-10 w-10 items-center pt-4"><span>{airLockRight.id}</span></div>
</div>
