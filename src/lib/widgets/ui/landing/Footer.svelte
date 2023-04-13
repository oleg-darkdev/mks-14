<script>
	import {
		SmallLogoLink,
		FooterLink,
		extensionsExperimentsToc,
		extensionsPersonsToc
	} from '../../../shared';

	const partners = [
		{
			title: '44games',
			link: '',
			img: '/images/partner_44_cubes.svg'
		},
		{
			title: 'DarkDev.progect',
			link: '',
			img: '/images/partner_darkdev.svg'
		},
		{
			title: 'ITingo',
			link: '',
			img: '/images/partner_itingo.svg'
		}
	];
</script>

<footer class="bg-violet-900" aria-labelledby="footer-heading">
	<!-- <h2 id="footer-heading" class="sr-only">Footer</h2> -->
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-16">
		<div class="flex flex-col ">
			<div class="flex flex-row flex-wrap items-center">
				<div class="h-auto w-auto py-4">
					<SmallLogoLink />
				</div>
				<div class="mx-auto max-w-3xl px-4 py-4">
					<h1 class=" text-center text-sm font-bold uppercase tracking-wide text-gray-800">
						Partnerzy i sponsorzy projektu
					</h1>
					<div class="flex flex-row flex-wrap text-center ">
						{#each partners as partner}
							<div class="bg-primary-light m-1 flex items-center justify-center">
								<img
									src={partner.img}
									alt="{partner.title} Logo"
									class="block h-20 object-contain"
								/>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class=" mb-6 flex flex-col xl:mt-0">
				<div class="mb-10 w-full">
					<h3 class="text-3xl font-bold uppercase tracking-wider text-white">
						Extensions: Experiments
					</h3>
					<ul
						role="list"
						class="mt-1 flex flex-row flex-wrap justify-center space-y-2 md:justify-start lg:justify-start  xl:justify-start "
					>
						{#each extensionsExperimentsToc.data as experiment}
							<FooterLink data={experiment} link="/app/extensions/experiments/{experiment.id}" />
						{/each}
					</ul>
				</div>

				<div class="w-full ">
					<h3 class="text-3xl  font-bold uppercase tracking-wider text-white">
						Extensions: Persons
					</h3>
					<ul
						role="list"
						class="mt-1 flex flex-row flex-wrap justify-center space-y-2 md:justify-start lg:justify-start  xl:justify-start "
					>
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
