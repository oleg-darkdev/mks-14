<script>
	import { HeaderLink } from '../../shared/';
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
		<a
			rel="noopener noreferrer"
			href="/"
			aria-label="Back to homepage"
			class="flex items-center p-2"
		>
			<img src="/images/logo.svg" alt="mks-14 logo" class="h-20 w-20" srcset="" />
		</a>
		<ul class="hidden items-stretch space-x-3 md:flex">
			{#each rightSideLinks as link}<li class="flex">
					<HeaderLink {link} />
				</li>
			{/each}
		</ul>
	</div>
</header>
