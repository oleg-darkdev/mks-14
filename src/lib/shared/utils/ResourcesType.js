export default class ResourcesTypes {
	constructor(
		// base
		baseResources = [0, 0, 0, 0],

		//optional
		optionalResources = [0, 0, 0, 0, 0, 0],

		// locations
		locations = [0, 0],

		// rounds
		rounds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	) {
		// basic
		this.amountFood = baseResources[0];
		this.amountWater = baseResources[1];
		this.amounScience = baseResources[2];
		this.amountEnegry = baseResources[3];

		// optional
		this.amountSolarPanels = optionalResources[0];
		this.amountBattery = optionalResources[1];
		this.amountReapirKit = optionalResources[2];
		this.amountHydroponic = optionalResources[3];
		this.amountLaser = optionalResources[4];
		this.amountMeteor = optionalResources[5];

		// locations
		this.amountObservatory = locations[0];
		this.amountLounge = locations[1];

		// rounds
		this.amountRound1 = rounds[0];
		this.amountRound2 = rounds[1];
		this.amountRound3 = rounds[2];
		this.amountRound4 = rounds[3];
		this.amountRound5 = rounds[4];
		this.amountRound6 = rounds[5];
		this.amountRound7 = rounds[6];
		this.amountRound8 = rounds[7];
		this.amountRound9 = rounds[8];
		this.amountRound10 = rounds[9];
		this.amountRound11 = rounds[10];
		this.amountRound12 = rounds[11];
	}

	get all() {
		return this.getAll;
	}

	getAll() {
		return [
			this.getFood(),
			this.getWater(),
			this.getScience(),
			this.getEnergy(),
			this.getReapirKit(),
			this.getSolarPanels(),
			this.getHydroponic(),
			this.getMeteor(),
			this.getLaser(),
			this.getBattery(),
			this.getRound1(),
			this.getRound2(),
			this.getRound3(),
			this.getRound4(),
			this.getRound5(),
			this.getRound6(),
			this.getRound7(),
			this.getRound8(),
			this.getRound9(),
			this.getRound10(),
			this.getRound11(),
			this.getRound12(),
		];
	}

	// base
	get food() {
		return this.getFood;
	}
	get science() {
		return this.getScience;
	}
	get water() {
		return this.getWater;
	}
	get energy() {
		return this.getEnergy;
	}

	// optional
	get solarPanels() {
		return this.getSolarPanels;
	}
	get reapirKit() {
		return this.getReapirKit;
	}
	get hydroponic() {
		return this.getHydroponic;
	}
	get battery() {
		return this.getBattery;
	}
	get laser() {
		return this.getLaser;
	}
	get meteor() {
		return this.getMeteor;
	}

	// locations

	// rounds
	get round1() {
		return this.getRound1;
	}
	get round2() {
		return this.getRound2;
	}
	get round3() {
		return this.getRound3;
	}
	get round4() {
		return this.getRound4;
	}
	get round5() {
		return this.getRound5;
	}
	get round6() {
		return this.getRound6;
	}
	get round7() {
		return this.getRound7;
	}
	get round8() {
		return this.getRound8;
	}
	get round9() {
		return this.getRound9;
	}
	get round10() {
		return this.getRound10;
	}
	get round11() {
		return this.getRound11;
	}
	get round12() {
		return this.getRound12;
	}

	// base
	getFood() {
		return {
			title: 'food',
			color: '',
			img: '/images/manual/toc/sources/food.svg',
			amount: this.amountFood
		};
	}
	getWater() {
		return {
			title: 'water',
			color: '',
			img: '/images/manual/toc/sources/water.svg',
			amount: this.amountWater
		};
	}
	getScience() {
		return {
			title: 'science',
			color: '',
			img: '/images/manual/toc/sources/science.svg',
			amount: this.amounScience
		};
	}
	getEnergy() {
		return {
			title: 'energy',
			color: '',
			img: '/images/manual/toc/sources/energy.svg',
			amount: this.amountEnegry
		};
	}

	// optional
	getReapirKit() {
		return {
			title: 'repair kit',
			color: '',
			img: '/images/manual/toc/sources/kit.svg',
			amount: this.amountReapirKit
		};
	}
	getSolarPanels() {
		return {
			title: 'solar panels',
			color: '',
			img: '/images/manual/toc/sources/solar.svg',
			amount: this.amountSolarPanels
		};
	}
	getHydroponic() {
		return {
			title: 'hydroponic',
			color: '',
			img: '/images/manual/toc/sources/hydroponic.svg',
			amount: this.amountHydroponic
		};
	}
	getBattery() {
		return {
			title: 'batteries',
			color: '',
			img: '/images/manual/toc/sources/battery.svg',
			amount: this.amountBattery
		};
	}
	getLaser() {
		return {
			title: 'laser',
			color: '',
			img: '/images/manual/toc/sources/laser.svg',
			amount: this.amountLaser
		};
	}
	getMeteor() {
		return {
			title: 'meteor',
			color: '',
			img: '/images/manual/toc/sources/meteor.svg',
			amount: this.amountMeteor
		};
	}

	// locations

	// rounds
	getRound1() {
		return {
			title: 'round 1',
			color: '',
			img: '/images/manual/toc/sources/round_1.svg',
			amount: this.amountRound1
		};
	}
	getRound2() {
		return {
			title: 'round 2',
			color: '',
			img: '/images/manual/toc/sources/round_2.svg',
			amount: this.amountRound1
		};
	}
	getRound3() {
		return {
			title: 'round 3',
			color: '',
			img: '/images/manual/toc/sources/round_3.svg',
			amount: this.amountRound1
		};
	}
	getRound4() {
		return {
			title: 'round 4',
			color: '',
			img: '/images/manual/toc/sources/round_4.svg',
			amount: this.amountRound1
		};
	}
	getRound5() {
		return {
			title: 'round 5',
			color: '',
			img: '/images/manual/toc/sources/round_5.svg',
			amount: this.amountRound1
		};
	}
	getRound6() {
		return {
			title: 'round 6',
			color: '',
			img: '/images/manual/toc/sources/round_6.svg',
			amount: this.amountRound1
		};
	}
	getRound7() {
		return {
			title: 'round 7',
			color: '',
			img: '/images/manual/toc/sources/round_7.svg',
			amount: this.amountRound1
		};
	}
	getRound8() {
		return {
			title: 'round 8',
			color: '',
			img: '/images/manual/toc/sources/round_8.svg',
			amount: this.amountRound1
		};
	}
	getRound9() {
		return {
			title: 'round 9',
			color: '',
			img: '/images/manual/toc/sources/round_9.svg',
			amount: this.amountRound1
		};
	}
	getRound10() {
		return {
			title: 'round 10',
			color: '',
			img: '/images/manual/toc/sources/round_10.svg',
			amount: this.amountRound1
		};
	}
	getRound11() {
		return {
			title: 'round 11',
			color: '',
			img: '/images/manual/toc/sources/round_11.svg',
			amount: this.amountRound1
		};
	}
	getRound12() {
		return {
			title: 'round 12',
			color: '',
			img: '/images/manual/toc/sources/round_12.svg',
			amount: this.amountRound1
		};
	}
}
