import NavBtn from './ui/NavBtn.svelte';
import LevelCard from './ui/LevelCard.svelte';
import StepElement from './ui/StepElement.svelte';
import Article from './ui/Article.svelte';
import LargeBtn from './ui/app/LargeBtn.svelte';
import HeaderLink from './ui/HeaderLink.svelte';
import StatElement from './ui/landing/StatElement.svelte';
import DarkPriceItem from './ui/landing/DarkPriceItem.svelte';
import LightPriceItem from './ui/landing/LightPriceItem.svelte';
import HorisontalImage from './ui/app/HorisontalImage.svelte';

// landing
import FeatureText from './ui/landing/FeatureText.svelte';
import VerticalImage from './ui/landing/VerticalImage.svelte';
import SmallSquareImage from './ui/landing/SmallSquareImage.svelte';
import FooterLink from './ui/landing/FooterLink.svelte';


import SmallLogoLink from './ui/SmallLogoLink.svelte';


// data
import mainTocData from './data/toc/mainToc';
import personsTocData from './data/toc/personsToc';
import locationsTocData from './data/toc/locationsToc';
import experimentsTocData from './data/toc/extensions/experimentsBaseToc';
import astronomyExperiments from './data/toc/extensions/experiments/astronomy';
import biophysicsExperiments from './data/toc/extensions/experiments/biophysics';
import biotechnologyExperiments from './data/toc/extensions/experiments/biotechnology';
import ecologyExperiments from './data/toc/extensions/experiments/ecology';
import materialsExperiments from './data/toc/extensions/experiments/materials';
import medicineExperiments from './data/toc/extensions/experiments/medicine';
import microbiologyExperiments from './data/toc/extensions/experiments/microbiology';
import microgravityExperiments from './data/toc/extensions/experiments/microgravity';
import physicsExperiments from './data/toc/extensions/experiments/physics';
import technologyExperiments from './data/toc/extensions/experiments/technology';
// persons
import austria from './data/toc/extensions/persons/austria';
import belgium from './data/toc/extensions/persons/belgium';
import brazil from './data/toc/extensions/persons/brazil';
import canada from './data/toc/extensions/persons/canada';
import china from './data/toc/extensions/persons/china';
import czech from './data/toc/extensions/persons/czech';
import denmark from './data/toc/extensions/persons/denmark';
import france from './data/toc/extensions/persons/france';
import gb from './data/toc/extensions/persons/gb';
import georgia from './data/toc/extensions/persons/georgia';
import germany from './data/toc/extensions/persons/germany';
import hungary from './data/toc/extensions/persons/hungary';
import india from './data/toc/extensions/persons/india';
import israel from './data/toc/extensions/persons/israel';
import italy from './data/toc/extensions/persons/italy';
import japan from './data/toc/extensions/persons/japan';
import kazakhstan from './data/toc/extensions/persons/kazakhstan';
import korea from './data/toc/extensions/persons/korea';
import luxembourg from './data/toc/extensions/persons/luxembourg';
import netherlands from './data/toc/extensions/persons/netherlands';
import norway from './data/toc/extensions/persons/norway';
import poland from './data/toc/extensions/persons/poland';
import portugal from './data/toc/extensions/persons/portugal';
import romania from './data/toc/extensions/persons/romania';
import russia from './data/toc/extensions/persons/russia';
import spain from './data/toc/extensions/persons/spain';
import sweden from './data/toc/extensions/persons/sweden';
import switzerland from './data/toc/extensions/persons/switzerland';
import tatarstan from './data/toc/extensions/persons/tatarstan';
import ukraine from './data/toc/extensions/persons/ukraine';
import usa from './data/toc/extensions/persons/usa';

// other data
import locationsList from './data/locationsList';
import getGameData from './data/getGame';
import gameComplect from './data/gameComplect';
import headerLinks from './data/app/headerLinks';
import ResourcesType from './utils/ResourcesType';

// extensions
import extensionsExperimentsToc from './data/toc/extensions/extensionsExperimentsToc';
import extensionsPersonsToc from './data/toc/extensions/extensionsPersonsToc';

// utils
import getCurrentUrl from './utils/getCurrentUrl';
import getLocationFromUrl from './utils/getLocationFromUrl';
import identifySelectedData from './utils/identifySelectedData';
import generateMap from './utils/generateMap';
import shuffle from './utils/shuffle';

export {
  FooterLink,
  headerLinks,
  StatElement,
  LightPriceItem,
  DarkPriceItem,
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
	extensionsExperimentsToc,
	ResourcesType,
	extensionsPersonsToc,
	gameComplect
};
