<script>
	import { locationsList, generateMap, shuffle } from '../../../shared/';
	import { BigMapElement, SmallMapElement, MediumMapElement } from '../../index';

	const airLockLeft = locationsList.airLockLeft,
		airLockRight = locationsList.airLockRight;

	const locationsNumbers = [
		locationsList.cargoFirst,
		locationsList.center,
		locationsList.laboratory,
		locationsList.batteries,
		locationsList.lounge,
		locationsList.cargoSecond
	];
	const topOuther = [
			locationsList.topOutherRight,
			locationsList.topOutherCenter,
			locationsList.topOutherLeft
		],
		bottomOuther = [
			locationsList.bottomOutherRight,
			locationsList.bottomOutherCenter,
			locationsList.bottomOutherLeft
		];

	let mapGrid = generateMap(shuffle(locationsNumbers));
</script>

<div class="flex w-full flex-row flex-wrap items-center justify-center text-white mt-10">
	<BigMapElement gridElement={airLockLeft} />
	{#each mapGrid as gridElement, i}
		<div class="flex flex-col items-center">
			<SmallMapElement gridElement={topOuther[i]} />
			<MediumMapElement gridElement={gridElement[0]} />
			<MediumMapElement gridElement={gridElement[1]} />
			<SmallMapElement gridElement={bottomOuther[i]} />
		</div>
	{/each}
	<BigMapElement gridElement={airLockRight} />
</div>
