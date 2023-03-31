<script>
	export let review;
</script>

<div class="rounded p-6 shadow-md dark:bg-gray-900">
	<p>
		{review.desc}
	</p>
	<div class="mt-4 flex items-center space-x-4">
		<img
			src={review.img}
			alt={review.title}
			class="h-12 w-12 rounded-full bg-cover bg-center dark:bg-gray-500"
		/>
		<div>
			<p class="text-lg font-semibold">{review.fullName}</p>
			<p class="text-sm dark:text-gray-400">{review.position}</p>
		</div>
	</div>
</div>
