<script>
	import {
		HeroLanding,
		StatsLanding,
		FeaturesLanding,
		GalleryLanding,
		AppLanding,
		StepsLanding,
		ReviewsLanding,
		TeamLanding,
		VideoLanding,
		FooterLanding as Footer,
		Testimonial,
		PriceExtensions,
		PriceBox
	} from '../lib/widgets/';

	import {
		extensionsExperimentsToc,
		extensionsPersonsToc,
	} from '../lib/shared';
</script>


<main class=" bg-gray-900 ">
	<HeroLanding />

	<a name="about" />
	<StatsLanding />

	<FeaturesLanding />

	<Testimonial />

	<VideoLanding />

	<a name="gallery" />
	<GalleryLanding />

	<a name="app" />
	<AppLanding />

	<a name="updates" />
	<!-- <StepsLanding /> -->

	<PriceBox />
	<section id="price"class="my-12 flex flex-col w-full items-center justify-center bg-violet-700 py-12 text-gray-100">
		<h2
			class="text-center text-4xl font-bold leading-none text-white  md:text-4xl lg:text-5xl xl:text-5xl"
		>
			Dodatki dla gry
		</h2>
		<PriceExtensions link='/app/extensions/experiments' extensions={extensionsExperimentsToc} />
		<PriceExtensions link='/app/extensions/persons'  extensions={extensionsPersonsToc} />
	</section>
	<!-- <GameKitLanding /> -->

	<!-- pricing -->
	<!-- <section class="py-6 bg-gray-900 text-gray-50">
	<div class="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
		<div class="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-900">
			<span class="text-sm">Basic</span>
			<p class="text-5xl font-bold text-center">39€</p>
			<p class="font-semibold text-center">Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos voluptatibus sequi cum, non nesciunt aspernatur a?</p>
			<button class="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 border-gray-700">Sign up</button>
		</div>
		<div class="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 bg-violet-400 text-gray-900">
			<span class="text-sm font-semibold">Advanced</span>
			<p class="text-5xl font-bold">89€</p>
			<p class="font-semibold">Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos voluptatibus sequi cum, non nesciunt aspernatur a?</p>
			<button class="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-900 text-gray-50">Sign up</button>
		</div>
	</div>
</section> -->

	<a name="team" />
	<TeamLanding />

	<a name="reviews" />
	<ReviewsLanding />
	<Footer />
</main>
