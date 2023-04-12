<script>
	export let text;
</script>

<div class="flex items-center px-2 py-2 group hover:bg-violet-700 rounded-lg">
	<div class="flex-shrink-0">
		<div class="flex h-12 w-12 items-center justify-center rounded-md bg-violet-700 group-hover:bg-gray-100 text-gray-900">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="h-7 w-7"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			</svg>
		</div>
	</div>
	<div class="ml-4 ">
		<h4 class="text-lg font-medium leading-6 group-hover:text-gray-900 group-hover:font-bold text-gray-50">{text.title}</h4>
		<p class="group-hover:text-gray-900 mt-2 text-gray-400">
			{text.desc}
		</p>
	</div>
</div>
