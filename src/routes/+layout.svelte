<script lang="ts">
  	import { Header } from '../lib/widgets';


	import '../app.postcss';

	import { language } from '@inlang/sdk-js';
	import {ThemeSwitcher, SvelteTheme, LocaleSwitcher} from '$shared/';

	export let data;
</script>

	<!-- <a href="/{language}">
		<h1>Home</h1>
	</a> -->

	<!-- <LocaleSwitcher /> -->

	<!-- <ThemeSwitcher /> -->

  <Header />


<slot />

<!-- <SvelteTheme attribute="data-theme" /> -->



<style>
	:global(.font-numbers) {
		font-family: 'Numbers';
		line-height: 1.2;
	}

	@font-face {
		font-family: 'Numbers';
		font-style: normal;
		font-weight: 500;

		src: local(''), /* Super Modern Browsers */ url('/fonts/numbers.woff') format('woff'),
			/* Modern Browsers */ url('/fonts/numbers.ttf') format('truetype'),
			/* Safari, Android, iOS */ url('/fonts/numbers.svg') format('svg'); /* Legacy iOS */
	}
</style>
