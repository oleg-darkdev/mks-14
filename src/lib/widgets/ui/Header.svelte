<script>
	import { HeaderLink, SmallLogoLink } from '../../shared/';
	export let leftSideLinks, rightSideLinks;
</script>

<header class="bg-violet-700 p-2 text-gray-100 lg:p-4">
	<div class="nav-wrap container mx-auto flex h-auto items-center justify-center md:space-x-8">
		<ul class="hidden items-stretch space-x-3 md:flex">
			{#each leftSideLinks as link}<li class="flex">
					<HeaderLink {link} />
				</li>
			{/each}
		</ul>
		<SmallLogoLink />
		<ul class="hidden items-stretch space-x-3 md:flex">
			{#each rightSideLinks as link}<li class="flex">
					<HeaderLink {link} />
				</li>
			{/each}
		</ul>

		<ul class="mobile-nav container grid grid-cols-6 gap-1 overflow-hidden xl:grid-cols-3">
			{#each leftSideLinks as link}<li class="flex">
					<HeaderLink {link} />
				</li>
			{/each}
			{#each rightSideLinks as link}<li class="flex">
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
	}
	@media (min-width: 560px) {
		.mobile-nav {
			display: none;
		}
	}
</style>
