import NavBtn from './ui/NavBtn.svelte';
import LevelCard from './ui/LevelCard.svelte';
import StepElement from './ui/StepElement.svelte';
import Article from './ui/Article.svelte';
import LargeBtn from './ui/app/LargeBtn.svelte';
import HeaderLink from './ui/HeaderLink.svelte';
import HorisontalImage from './ui/app/HorisontalImage.svelte';

import FeatureText from './ui/landing/FeatureText.svelte';
import VerticalImage from './ui/landing/VerticalImage.svelte';
import SmallSquareImage from './ui/landing/SmallSquareImage.svelte';
import SmallLogoLink from './ui/SmallLogoLink.svelte';

import mainTocData from './data/toc/mainToc';
import personsTocData from './data/toc/personsToc';
import locationsTocData from './data/toc/locationsToc';
import experimentsTocData from './data/toc/experimentsToc';
import locationsList from './data/locationsList';
import getGameData from './data/getGame';
import ResourcesType from './utils/ResourcesType';

// extensions
import extensionsCountriesTocTocData from './data/toc/extensions/extensionsCountriesToc';
// import extensionsExperimentsTocTocData from './data/toc/extensionsExperimentsToc';


// utils
import getCurrentUrl from './utils/getCurrentUrl';
import getLocationFromUrl from './utils/getLocationFromUrl';
import identifySelectedData from './utils/identifySelectedData';
import generateMap from './utils/generateMap';
import shuffle from './utils/shuffle';

export {
	NavBtn,
	LevelCard,
	StepElement,
	Article,
	LargeBtn,
	HeaderLink,
	HorisontalImage,
	FeatureText,
	VerticalImage,
	SmallSquareImage,
	mainTocData,
	personsTocData,
	locationsTocData,
	experimentsTocData,
	getCurrentUrl,
	getLocationFromUrl,
	identifySelectedData,
	locationsList,
	generateMap,
	shuffle,
	getGameData,
	SmallLogoLink,
	extensionsCountriesTocTocData,
  // extensionsExperimentsTocTocData,
  ResourcesType
};
