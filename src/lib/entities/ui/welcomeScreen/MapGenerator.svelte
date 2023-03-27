<script>
	const locationList = {
		cargoFirst: {
			id: 2,
			img: '',
			title: 'Cargo first ',
			desc: ''
		},
		center: {
			id: 3,
			img: '',
			title: 'Center',
			desc: ''
		},
		laboratory: {
			id: 4,
			img: '',
			title: 'Laboratory',
			desc: ''
		},
		batteries: {
			id: 5,
			img: '',
			title: 'Batteries',
			desc: ''
		},
		lounge: {
			id: 6,
			img: '',
			title: 'Lounge',
			desc: ''
		},
		cargoSecond: {
			id: 1,
			img: '',
			title: 'Cargo second',
			desc: ''
		},
		airLockLeft: {
			id: 1,
			img: '',
			title: 'Left Airlock ',
			desc: ''
		},
		airLockRight: {
			id: 8,
			img: '',
			title: 'Right Airlock ',
			desc: ''
		},
		topOutherRight: {
			id: 9,
			img: '',
			title: 'Top right',
			desc: ''
		},
		topOutherCenter: {
			id: 10,
			img: '',
			title: 'Top Center',
			desc: ''
		},
		topOutherLeft: {
			id: 11,
			img: '',
			title: 'Top left',
			desc: ''
		},
		bottomOutherRight: {
			id: 12,
			img: '',
			title: 'Bottom right',
			desc: ''
		},
		bottomOutherCenter: {
			id: 13,
			img: '',
			title: 'Bottom Center',
			desc: ''
		},
		bottomOutherLeft: {
			id: 14,
			img: '',
			title: 'Bottom left',
			desc: ''
		}
	};

	let locationsNumbers = [
		locationList.cargoFirst.id,
		locationList.center.id,
		locationList.laboratory.id,
		locationList.batteries.id,
		locationList.lounge.id,
		locationList.cargoSecond.id
	];
	const topOuther = [
			locationList.topOutherRight.id,
			locationList.topOutherCenter.id,
			locationList.topOutherLeft.id
		],
		bottomOuther = [
			locationList.bottomOutherRight.id,
			locationList.bottomOutherCenter.id,
			locationList.bottomOutherLeft.id
		];

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}

		return array;
	}

	function generateMap() {
		let tempArr = [],
			count = 2,
			mapGrid = [];

		tempArr = shuffle(locationsNumbers);

		for (let s = 0, e = count; s < tempArr.length; s += count, e += count)
			mapGrid.push(tempArr.slice(s, e));

		return mapGrid;
	}

	let mapGrid = generateMap();
</script>

<div class="flex w-full flex-row justify-center text-white">
	<div class="flex h-10 w-10 items-center pt-4"><span>{locationList.airLockLeft.id}</span></div>
	{#each mapGrid as grid, i}
		<div class="flex h-10 w-10 flex-col">
			<span>{topOuther[i]}</span>
			<span>{grid[0]}</span>
			<span>{grid[1]}</span>
			<span>{bottomOuther[i]}</span>
		</div>
	{/each}
	<div class="flex h-10 w-10 items-center pt-4"><span>{locationList.airLockRight.id}</span></div>
</div>
