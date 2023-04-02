<script>
	import { HeaderLink, SmallLogoLink } from '../../shared/';
	export let leftSideLinks, rightSideLinks;
</script>

<header class="bg-gray-900 p-4 text-gray-100">
	<div class="container mx-auto flex h-16 justify-center md:space-x-8">
		<ul class="hidden items-stretch space-x-3 md:flex">
			{#each leftSideLinks as link}<li class="flex">
					<HeaderLink {link} />
				</li>
			{/each}
		</ul>
		<div class="h-20 w-20">
			<SmallLogoLink />
		</div>
		<ul class="hidden items-stretch space-x-3 md:flex">
			{#each rightSideLinks as link}<li class="flex">
					<HeaderLink {link} />
				</li>
			{/each}
		</ul>
	</div>
</header>
