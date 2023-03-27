<script>
	import {
		FooterApp,
		StartScreen,
		GameProgressScreen,
		InstrustionScreen
	} from '../../lib/widgets/';

	let activeScreen = 'Rozpoczęcie';


</script>

<section class="flex h-screen flex-col items-center">
	{#if activeScreen === 'Rozpoczęcie'}
		<StartScreen  />
	{:else if activeScreen === 'Instrukcja'}
		<InstrustionScreen  />
	{:else if activeScreen === 'Rozgrywka'}
		<GameProgressScreen />
	{/if}
</section>
<FooterApp bind:activeScreen />
