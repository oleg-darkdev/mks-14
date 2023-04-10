<script>
	import { ShortTeamMemberCard, FullTeamMemberCard } from '../../../entities';
	const coreTeam = [
		{
			fullName: 'Oleg Medvedev',
			function: 'Author / designer / developer',
			img: '/images/team/author_1.png',
			linkedin: '',
			github: ''
		}
	];

	const supportTeam = [
		{
			fullName: 'Tymofii Lisovychenko',
			function: 'Consultant',
			img: '/images/team/member_2.png'
		},
		{
			fullName: 'Savichau Anton',
			function: 'Consultant',
			img: '/images/team/member_1.png'
		}
	];
</script>

<section class="py-6 text-gray-100">
	<div class="container mx-auto flex items-center justify-center p-4 sm:p-10">
		<div
			class="rounded-lg border-2 border-violet-700 bg-gray-800 bg-gray-900 p-6 shadow-md shadow-violet-700  "
		>
			<p class="text-md p-2 text-center font-medium uppercase tracking-wider">Zespół projektu</p>

			<h2 class="max-w-3xl text-center text-2xl font-bold leading-none sm:text-5xl">
				Dzięki tym osobom prototyp gry został zaimplementowany na
				<a
					href="https://www.facebook.com/events/742158657156499/742158660489832/"
					class="text-violet-700 underline">"Science Game Jam 2023"</a
				>
			</h2>
			<div class="mt-8 flex flex-row flex-wrap-reverse justify-center">
				{#each coreTeam as member}
					<FullTeamMemberCard {member} />
				{/each}
			</div>
			<div class="flex flex-row flex-wrap-reverse justify-center">
				{#each supportTeam as member}
					<ShortTeamMemberCard {member} />
				{/each}
			</div>
		</div>
	</div>
</section>
