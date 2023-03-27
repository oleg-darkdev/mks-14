<script>
	export let text, activeScreen;
</script>

<button on:click class:active={text === activeScreen}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<slot />
	</svg>
	<span class="btm-nav-label">{text}</span>
</button>
