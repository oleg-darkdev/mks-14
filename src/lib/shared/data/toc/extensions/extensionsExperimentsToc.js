import astronomyExperiments from './experiments/astronomy';
import biophysicsExperiments from './experiments/biophysics';
import biotechnologyExperiments from './experiments/biotechnology';
import ecologyExperiments from './experiments/ecology';
import materialsExperiments from './experiments/materials';
import medicineExperiments from './experiments/medicine';
import microbiologyExperiments from './experiments/microbiology';
import microgravityExperiments from './experiments/microgravity';
import physicsExperiments from './experiments/physics';
import technologyExperiments from './experiments/technology';

const TOC = {
	link: '/app/extensions/experiments/',
	img: '/images/manual/toc/toc_extensions.png',
	title: 'Experiments extensions',

	data: [
		{
			title: 'Astronomy experiments',
			id: '1',
			link: 'astronomy',
			priceCategory: [false, true, false, false, false],
			img: '/images/manual/toc/experiments/astronomy.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: astronomyExperiments
		},
		{
			title: 'Biophysics experiments',
			id: '2',
			link: 'biophysics',
			priceCategory: [true, false, false, false, false],

			img: '/images/manual/toc/experiments/biophysics.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: biophysicsExperiments
		},
		{
			title: 'Biotechnology experiments',
			id: '3',
			link: 'biotechnology',
			priceCategory: [false, false, false, false, true],

			img: '/images/manual/toc/experiments/biotechnology.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: biotechnologyExperiments
		},
		{
			title: 'Ecological  experiments',
			id: '4',
			link: 'ecology',
			priceCategory: [false, false, false, false, true],

			img: '/images/manual/toc/experiments/ecology.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: ecologyExperiments
		},
		{
			title: 'Material science experiments',
			id: '5',
			link: 'material',
			priceCategory: [true, false, false, false, false],

			img: '/images/manual/toc/toc_synopsis.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: materialsExperiments
		},
		{
			title: 'Medicine experiments',
			id: '6',
			link: 'medicine',
			priceCategory: [false, true, false, false, false],

			img: '/images/manual/toc/experiments/medicine.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: medicineExperiments
		},
		{
			title: 'Microbiology experiments',
			id: '7',
			link: 'microbiology',
			priceCategory: [false, false, false, true, false],

			img: '/images/manual/toc/experiments/microbiology.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: microbiologyExperiments
		},
		{
			title: 'Experiments on microgravity',
			id: '8',
			link: 'microgravity',
			priceCategory: [false, false, false, true, false],

			img: '/images/manual/toc/experiments/microgravity.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: microgravityExperiments
		},
		{
			title: 'Physics experiments',
			id: '9',
			link: 'physics',
			priceCategory: [false, false, false, false, true],

			img: '/images/manual/toc/experiments/physics.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: physicsExperiments
		},
		{
			title: 'Technological experiments',
			id: '10',
			link: 'technologies',
			img: '/images/manual/toc/experiments/technology.png',
			priceCategory: [false, false, false, false, true],

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: technologyExperiments
		}
	]
};

export default TOC;
