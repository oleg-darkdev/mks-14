<script>
	import {
		FooterApp,
		StartScreen,
		GameProgressScreen,
		InstrustionScreen
	} from '../../lib/widgets/';

	let activeScreen = 'Rozpoczęcie';
</script>

<section class="flex h-screen flex-col items-center justify-center">
	<div class:hidden={activeScreen == 'Instrukcja' || activeScreen == 'Rozgrywka'}>
		<StartScreen />
	</div>
	<div class:hidden={activeScreen == 'Rozpoczęcie' || activeScreen == 'Rozgrywka'}>
		<InstrustionScreen />
	</div>
	<div class:hidden={activeScreen == 'Instrukcja' || activeScreen == 'Rozpoczęcie'}>
		<GameProgressScreen />
	</div>
</section>

<FooterApp bind:activeScreen />
