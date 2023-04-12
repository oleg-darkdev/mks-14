<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<slot />

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
