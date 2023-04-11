<script>
	import {
		Header,
		HeroLanding,
		StatsLanding,
		FeaturesLanding,
		GalleryLanding,
		AppLanding,
		StepsLanding,
		ReviewsLanding,
		TeamLanding,
		VideoLanding,
		FooterLanding,
		Testimonial,
		PriceExtensions,
		PriceBox
	} from '../lib/widgets/';

	const headerLeftSideLinks = [
			{ link: '/app', img: 'header_app.svg', text: 'App' },
			{ link: '#about', img: 'header_about.svg', text: 'About' },
			{ link: '#team', img: 'header_team.svg', text: 'Team' }
		],
		headerRightSideLinks = [
			{ link: '#updates', img: 'header_updates.svg', text: 'Updates' },
			{ link: '#gallery', img: 'header_gallery.svg', text: 'Gallery' },
			{ link: '#reviews', img: 'header_reviews.svg', text: 'Reviews' }
		];
</script>

<div class="flex h-screen flex-col overflow-hidden bg-gray-900">
	<Header leftSideLinks={headerLeftSideLinks} rightSideLinks={headerRightSideLinks} />
	<main class="flex-1 overflow-y-scroll bg-gray-900">
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
    <PriceExtensions />

    
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
	</main>
	<!-- <FooterLanding /> -->
</div>
