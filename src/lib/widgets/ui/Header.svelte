<script>
	import { HeaderLink, SmallLogoLink } from '../../shared/';
	import { onMount } from 'svelte';

	onMount(async () => {
		window.onscroll = function () {
			myFunction();
		};

		let header = document.getElementById('myHeader');
		let sticky = header.offsetTop;

		function myFunction() {
			if (window.pageYOffset > sticky) {
				header.classList.add('sticky');
				header.style.top = 0;
			} else {
				header.classList.remove('sticky');
			}
		}
	});

	export let links;
</script>

<header
	style="margin-bottom: -230px; height: 200px;"
	class="header relative z-20 flex w-full max-w-lg flex-col items-center rounded-bl-lg rounded-br-lg bg-violet-700 p-2 text-gray-100 shadow-md shadow-violet-700 lg:p-4"
>
	<SmallLogoLink />
	<div
		style="top: 15.5%;"
		id="myHeader"
		class="nav-wrap sticky z-10 w-full mx-auto flex h-auto max-w-md items-center justify-center rounded-bl-lg rounded-br-lg bg-violet-700 p-2 shadow-md shadow-violet-700 md:space-x-8"
	>
		<ul class="container grid grid-cols-6 gap-2 overflow-hidden xl:grid-cols-6 ">
			{#each links as link}
				<li class="flex flex-col items-center  ">
					<HeaderLink {link} />
				</li>
			{/each}
		</ul>
	</div>
</header>

<style>
	@media (max-width: 560px) {
		.nav-wrap {
			display: flex;
			flex-direction: column;
		}

		.header {
			left: 0;
		}
	}
	@media (min-width: 780px) {
		.header {
			left: 24%;
		}
	}

	@media (min-width: 1200px) {
		.header {
			left: 34%;
		}
	}

	.sticky {
		position: fixed;
	}
</style>
