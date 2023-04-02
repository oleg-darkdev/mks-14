<script>
	import { SmallLogoLink } from '../../../shared';

	const socialLinks = [
		{
			title: 'GitHub',
			link: ''
		}
	];
</script>

<footer class="h-40 bg-violet-900 px-4 py-8 text-gray-400">
	<div
		class="container  mx-auto flex flex-wrap items-center justify-center space-y-4 sm:justify-between sm:space-y-0"
	>
		<div class="flex flex-row flex-wrap items-center justify-center space-x-4 pr-3 sm:space-x-8">
			<div class="h-10 w-40 flex-shrink-0 ">
				<SmallLogoLink />
			</div>
			<ul class="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="#">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Web App</a>
				</li>
			</ul>
		</div>
		<ul class="flex flex-wrap space-x-4 pl-3 sm:space-x-8">
			{#each socialLinks as link}
				<li>
					<a rel="noopener noreferrer" href={link.link}>{link.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>
