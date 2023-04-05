import {
	mainTocData,
	personsTocData,
	locationsTocData,
	experimentsTocData,
	extensionsCountriesTocTocData
} from '../index';

const textArray = (locationValue) =>
	locationValue == 'locations'
		? locationsTocData
		: locationValue == 'persons'
		? personsTocData
		: locationValue == 'experiments'
		? experimentsTocData
		: locationValue == 'extensions'
		? extensionsCountriesTocTocData
		: mainTocData;

export default textArray;
