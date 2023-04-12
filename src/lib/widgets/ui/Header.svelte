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
			} else {
				header.classList.remove('sticky');
			}
		}
	});

	export let links;
</script>

<header
	style="margin-bottom: -230px;"
	class="header relative flex w-full max-w-lg flex-col items-center justify-center rounded-bl-lg rounded-br-lg bg-violet-700 shadow-md shadow-violet-700 p-2 text-gray-100 lg:p-4"
>
	<SmallLogoLink />
	<div
		id="myHeader"
		class="nav-wrap container sticky z-10 mx-auto flex h-auto max-w-lg items-center justify-center rounded-bl-lg rounded-br-lg bg-violet-700 shadow-md shadow-violet-700 p-4 md:space-x-8"
	>
		<ul class="container grid grid-cols-6 gap-1 overflow-hidden xl:grid-cols-6 ">
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
		top: 0;
	}
</style>
