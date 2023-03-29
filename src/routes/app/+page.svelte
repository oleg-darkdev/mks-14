<script>
	import { FooterApp, StartScreen, GameProgressScreen, ManualScreen } from '../../lib/widgets/';

	let activeScreen = 'Rozpoczęcie';
</script>

<section class="flex h-screen flex-col items-center justify-center">
	<div class:hidden={activeScreen == 'Instrukcja' || activeScreen == 'Rozgrywka'}>
		<StartScreen bind:activeScreen />
	</div>
	<div class:hidden={activeScreen == 'Rozpoczęcie' || activeScreen == 'Rozgrywka'}>
		<ManualScreen />
	</div>
	<div class:hidden={activeScreen == 'Instrukcja' || activeScreen == 'Rozpoczęcie'}>
		<GameProgressScreen />
	</div>
</section>

<FooterApp bind:activeScreen />
