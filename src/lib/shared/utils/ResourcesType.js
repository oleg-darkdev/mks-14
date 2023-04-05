export default class ResourcesTypes {
	constructor(
		amountFood = 0,
		amountWater = 0,
		amounScience = 0,
		amountEnegry = 0,
		amountSolarPanels = 0,
		amountRepairKit = 0,
		amountHydroponic = 0
	) {
		this.amountFood = amountFood;
		this.amountWater = amountWater;
		this.amounScience = amounScience;
		this.amountEnegry = amountEnegry;
		this.amountSolarPanels = amountSolarPanels;
		this.amountReapirKit = amountRepairKit;
		this.amountHydroponic = amountHydroponic;
	}

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
	get solarPanels() {
		return this.getSolarPanels;
	}
	get reapirKit() {
		return this.getReapirKit;
	}
	get hydroponic() {
		return this.getHydroponic;
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
			this.getHydroponic()
		];
	}
	getFood() {
		return { title: 'food', color: '', img: '', amount: this.amountFood };
	}
	getWater() {
		return { title: 'water', color: '', img: '', amount: this.amountWater };
	}
	getScience() {
		return { title: 'science', color: '', img: '', amount: this.amounScience };
	}
	getEnergy() {
		return { title: 'energy', color: '', img: '', amount: this.amountEnegry };
	}
	getReapirKit() {
		return { title: 'repair kit', color: '', img: '', amount: this.amountReapirKit };
	}
	getSolarPanels() {
		return { title: 'solar panels', color: '', img: '', amount: this.amountSolarPanels };
	}
	getHydroponic() {
		return { title: 'hydroponic', color: '', img: '', amount: this.amountHydroponic };
	}
}
