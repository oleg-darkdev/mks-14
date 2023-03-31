<script>
	export let member;
</script>

<div
	class="mx-6 my-12 flex w-full flex-col justify-center rounded-md border-2 border-violet-700 text-center shadow-md shadow-violet-700 dark:bg-gray-700  dark:text-violet-500 md:w-64 lg:w-60 xl:w-40 h-32"
>
	<img
		alt={member.fullName}
		class="-mt-12 h-24 w-24 flex-shrink-0 self-center rounded-full border-2 border-violet-700 bg-cover bg-center shadow-violet-700 dark:bg-gray-500"
		src={member.img}
	/>
	<div class="flex-1">
		<p class="text-xl font-semibold leading-snug">{member.fullName}</p>
		<p>{member.function}</p>
	</div>
</div>
