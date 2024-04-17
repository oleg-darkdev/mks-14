import NavBtn from './ui/NavBtn.svelte';
import HorisontalImage from './ui/app/HorisontalImage.svelte';

import LevelCard from './ui/LevelCard.svelte';
import StepElement from './ui/StepElement.svelte';
import Article from './ui/Article.svelte';
import LargeBtn from './ui/app/LargeBtn.svelte';
import HeaderLink from './ui/HeaderLink.svelte';
import StatElement from './ui/landing/StatElement.svelte';
import DarkPriceItem from './ui/landing/DarkPriceItem.svelte';
import LightPriceItem from './ui/landing/LightPriceItem.svelte';


// landing
import FeatureText from './ui/landing/FeatureText.svelte';
import VerticalImage from './ui/landing/VerticalImage.svelte';
import SmallSquareImage from './ui/landing/SmallSquareImage.svelte';
import FooterLink from './ui/landing/FooterLink.svelte';

import SmallLogoLink from './ui/SmallLogoLink.svelte';

// TOC
export {
	austria,
	belgium,
	russia,
	spain,
	sweden,
	switzerland,
	tatarstan,
	ukraine,
	usa,
	brazil,
	canada,
	china,
	czech,
	denmark,
	france,
	gb,
	georgia,
	germany,
	hungary,
	india,
	israel,
	italy,
	japan,
	kazakhstan,
	korea,
	luxembourg,
	netherlands,
	norway,
	poland,
	portugal,
	romania,
	extensionsExperimentsToc,
	extensionsPersonsToc,
	astronomyExperiments,
	biophysicsExperiments,
	biotechnologyExperiments,
	ecologyExperiments,
	materialsExperiments,
	medicineExperiments,
	microbiologyExperiments,
	microgravityExperiments,
	physicsExperiments,
	technologyExperiments,
	mainTocData,
	personsTocData,
	locationsTocData,
	experimentsTocData
} from './data/index';

// other data
import locationsList from './data/locationsList';
import getGameData from './data/getGame';
import gameComplect from './data/gameComplect';
import headerAppLinks from './data/app/headerLinks';
import landingHeaderLinks from './data/landingHeaderLinks';

import ResourcesType from './utils/ResourcesType';

// utils
import getCurrentUrl from './utils/getCurrentUrl';
import getLocationFromUrl from './utils/getLocationFromUrl';
import identifySelectedData from './utils/identifySelectedData';
import generateMap from './utils/generateMap';
import shuffle from './utils/shuffle';
import checkTitleResource from './utils/checkTitleResource';

export {
	FooterLink,
	landingHeaderLinks,
	checkTitleResource,
	headerAppLinks,
	StatElement,
	LightPriceItem,
	DarkPriceItem,
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
	getCurrentUrl,
	getLocationFromUrl,
	identifySelectedData,
	locationsList,
	generateMap,
	shuffle,
	getGameData,
	SmallLogoLink,
	ResourcesType,
	gameComplect
};
