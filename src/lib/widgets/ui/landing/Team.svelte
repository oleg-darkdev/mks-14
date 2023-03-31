<script>
	import { ShortTeamMemberCard, FullTeamMemberCard } from '../../../entities';
	const team = [
		{
			fullName: 'Lorem ipsum',
			function: 'Consultant',
			img: 'https://source.unsplash.com/100x100/?portrait?1'
		},
		{
			fullName: 'Lorem ipsum',
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

<section class="py-6 dark:bg-gray-900 dark:text-gray-100">
	<div class="container mx-auto flex flex-col items-center justify-center p-4 sm:p-10">
		<p class="p-2 text-center text-sm font-medium uppercase tracking-wider">Development team</p>
		<h1 class="text-center text-4xl font-bold leading-none sm:text-5xl">
			The talented people behind the scenes
		</h1>
		<div class="mt-8 flex flex-row flex-wrap-reverse justify-center">
			<FullTeamMemberCard member={team[0]} />
			<FullTeamMemberCard member={team[1]} />
			<FullTeamMemberCard member={team[2]} />
		</div>
		<div class="flex flex-row flex-wrap-reverse justify-center">
			<ShortTeamMemberCard member={team[0]} />
			<ShortTeamMemberCard member={team[1]} />
			<ShortTeamMemberCard member={team[2]} />
		</div>
	</div>
</section>
