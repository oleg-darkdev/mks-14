import { mainTocData, personsTocData, locationsTocData, experimentsTocData } from '../index';

const textArray = (locationValue) =>
	locationValue == 'locations'
		? locationsTocData
		: locationValue == 'persons'
		? personsTocData
		: locationValue == 'experiments'
		? experimentsTocData
		: mainTocData;

export default textArray;
