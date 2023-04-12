<script>
	import {
		SmallLogoLink,
		FooterLink,
		extensionsExperimentsToc,
		extensionsPersonsToc
	} from '../../../shared';

	const socialLinks = [
		{
			title: 'GitHub',
			link: ''
		}
	];
</script>

<!-- <footer class="h-40 bg-violet-900 px-4 py-8 text-gray-400">
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
</footer> -->

<footer class="bg-violet-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>

	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-16">
		<!-- xl:grid xl:grid-cols-3 xl:gap-8 -->
		<div class="flex flex-col ">
			<div class="flex flex-row flex-wrap items-center">
				<div class="h-auto w-auto py-4">
					<p class="mt-2 text-sm text-white text-gray-500">Lorem impsum</p>

					<SmallLogoLink />
				</div>

				<div class="mx-auto max-w-3xl px-4 py-4">
					<h1 class=" text-center text-sm font-bold uppercase tracking-wide text-gray-800">
						We’re proud to have played a part in these amazing journeys.
					</h1>
					<div class="grid grid-cols-2 gap-2 text-center lg:grid-cols-6">
						<div class="bg-primary-light flex items-center justify-center bg-opacity-25 p-6">
							<img src="" alt="Todoist Logo" class="block h-16 object-contain" />
						</div>

					</div>
				</div>
			</div>

			<div class=" mb-6 flex flex-col xl:mt-0">
				<div class="mb-10 w-full">
					<h3 class="text-3xl font-bold uppercase tracking-wider text-gray-300">
						Extensions: Experiments
					</h3>
					<ul role="list" class="mt-1 flex flex-row flex-wrap justify-center space-y-2 ">
						{#each extensionsExperimentsToc.data as experiment}
							<FooterLink data={experiment} link="/app/extensions/experiments/{experiment.id}" />
						{/each}
					</ul>
				</div>

				<div class="w-full ">
					<h3 class="text-3xl  font-bold uppercase tracking-wider text-gray-300">
						Extensions: Persons
					</h3>
					<ul role="list" class="mt-1 flex flex-row flex-wrap justify-center space-y-2 ">
						{#each extensionsPersonsToc.data as person}
							<FooterLink data={person} link="/app/extensions/persons/{person.id}" />
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="px-4 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-16">
    <div class="flex flex-wrap items-baseline">
      <span class="mt-2 text-sm font-light text-gray-500">
        Copyright © 2020 - 2021
        <a href="" class="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">@</a>. Since 2020
      </span>
    </div>
  </div> -->
</footer>
