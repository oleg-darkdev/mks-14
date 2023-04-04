<script>
	export let member;
</script>

<div
	class="mx-1 my-12 flex h-32 w-60  flex-col justify-center rounded-md border-2  border-violet-700 bg-gray-800  px-2 pb-4 text-center text-violet-500 shadow-md shadow-violet-700 xl:mx-6  "
>
	<img
		alt={member.fullName}
		class="-mt-12 h-24 w-24 flex-shrink-0 self-center rounded-full border-2 border-violet-700 bg-gray-500 bg-cover bg-center shadow-violet-700"
		src={member.img}
	/>
	<div class="flex-1">
		<p class="text-xl font-semibold leading-snug">{member.fullName}</p>
		<p>{member.function}</p>
	</div>
</div>
