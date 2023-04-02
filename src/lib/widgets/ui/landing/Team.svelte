<script>
	import { ShortTeamMemberCard, FullTeamMemberCard } from '../../../entities';
	const coreTeam = [
		{
			fullName: 'Oleg Medvedev',
			function: 'Game designer / front-end developer',
			img: 'https://source.unsplash.com/100x100/?portrait?1',
			linkedin: '',
			github: ''
		}
	];

	const supportTeam = [
		{
			fullName: 'Tymofii Lisovychenko',
			function: 'Consultant',
			img: 'https://source.unsplash.com/100x100/?portrait?1'
		},
		{
			fullName: 'Savichau Anton',
			function: 'Consultant',
			img: 'https://source.unsplash.com/100x100/?portrait?2'
		},
		{
			fullName: 'Lorem ipsum',
			function: 'Consultant',
			img: 'https://source.unsplash.com/100x100/?portrait?3'
		}
	];
</script>

<section class="bg-gray-900 py-6 text-gray-100">
	<div class="container mx-auto flex flex-col items-center justify-center p-4 sm:p-10">
		<p class="p-2 text-center text-sm font-medium uppercase tracking-wider">Zespół projektu</p>
		<h1 class="text-center text-4xl font-bold leading-none sm:text-5xl max-w-xl">
			Ten projekt był możliwy dzięki tym osobom
		</h1>
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
</section>
