import austria from './persons/austria';
import belgium from './persons/belgium';
import brazil from './persons/brazil';
import canada from './persons/canada';
import china from './persons/china';
import czech from './persons/czech';
import denmark from './persons/denmark';
import france from './persons/france';
import gb from './persons/gb';
import georgia from './persons/georgia';
import germany from './persons/germany';
import hungary from './persons/hungary';
import india from './persons/india';
import israel from './persons/israel';
import italy from './persons/italy';
import japan from './persons/japan';
import kazakhstan from './persons/kazakhstan';
import korea from './persons/korea';
import luxembourg from './persons/luxembourg';
import netherlands from './persons/netherlands';
import norway from './persons/norway';
import poland from './persons/poland';
import portugal from './persons/portugal';
import romania from './persons/romania';
import russia from './persons/russia';
import spain from './persons/spain';
import sweden from './persons/sweden';
import switzerland from './persons/switzerland';
import tatarstan from './persons/tatarstan';
import ukraine from './persons/ukraine';
import usa from './persons/usa';

const TOC = {
	link: '/app/extensions/persons/',
	img: '/images/manual/toc/toc_extensions.png',
	data: [
		// {
		// 	title: 'extension: Europe',
		// 	id: '2',
		// 	img: '/images/manual/toc/toc_synopsis.png',
		// 	shortDesc:
		// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		// 	fullDesc: [
		// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		// 	],
		// 	extensionData:
		// },
		// {
		// 	title: 'extension: Asia',
		// 	id: '3',
		// 	img: '/images/manual/toc/toc_synopsis.png',
		// 	shortDesc:
		// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		// 	fullDesc: [
		// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		// 	],
		// 	extensionData:
		// },
		// {
		// 	title: 'extension: USSR',
		// 	id: '4',
		// 	img: '/images/manual/toc/toc_synopsis.png',
		// 	shortDesc:
		// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		// 	fullDesc: [
		// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		// 	],
		// 	extensionData:
		// },

		// countries
		{
			title: 'extension: Austria',
			id: '1',
			img: '/images/manual/toc/toc_synopsis.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: austria,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Belgium',
			id: '5',
			img: '/images/manual/toc/toc_synopsis.png',
			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: belgium,
			priceCategory: [false, true, false, false, false]
		},

		{
			title: 'extension: Russia',
			id: 6,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: russia,
			priceCategory: [true, false, false, false, false]
		},
		{
			title: 'extension: Spain',
			id: 7,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: spain,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Sweden',
			id: 8,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: sweden,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: switzerland',
			id: 9,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: switzerland,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Tatarstan',
			id: 10,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: tatarstan,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Ukraine',
			id: 11,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: ukraine,
			priceCategory: [false, true, false, false, false]
		},

		{
			title: 'extension: USA',
			id: 12,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: usa,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Brazil',
			id: 13,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: brazil,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Canada',
			id: 14,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: canada,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: China',
			id: 15,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: china,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Czech',
			id: 16,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: czech,
			priceCategory: [false, true, false, false, false]
		},

		{
			title: 'extension: Denmark',
			id: 17,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: denmark,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: France',
			id: 18,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: france,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Great Britain',
			id: 19,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: gb,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Georgia',
			id: 20,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: georgia,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Germany',
			id: 21,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: germany,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Belgium',
			id: 22,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: belgium,
			priceCategory: [false, true, false, false, false]
		},

		{
			title: 'extension: Hungary',
			id: 23,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: hungary,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: India',
			id: 24,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: india,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Israel',
			id: 25,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: israel,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Italy',
			id: 26,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: italy,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Japan',
			id: 27,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: japan,
			priceCategory: [false, true, false, false, false]
		},

		{
			title: 'extension: Kazakhstan',
			id: 28,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: kazakhstan,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Korea',
			id: 29,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: korea,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Luxembourg',
			id: 30,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: luxembourg,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Netherlands',
			id: 31,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: netherlands,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Norway',
			id: 32,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: norway,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Poland',
			id: 33,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: poland,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Portugal',
			id: 34,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: portugal,
			priceCategory: [false, true, false, false, false]
		},
		{
			title: 'extension: Romania',
			id: 35,
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			fullDesc: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			extensionData: romania,
			priceCategory: [false, true, false, false, false]
		}
	]
};

export default TOC;
