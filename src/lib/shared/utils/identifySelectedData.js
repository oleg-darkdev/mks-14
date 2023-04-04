import { mainTocData, personsTocData, locationsTocData, experimentsTocData, extensionsTocData } from '../index';

const textArray = (locationValue) =>
	locationValue == 'locations'
		? locationsTocData
		: locationValue == 'persons'
		? personsTocData
		: locationValue == 'experiments'
		? experimentsTocData
		: locationValue == 'extensions'
		? extensionsTocData
		: mainTocData;

export default textArray;
