<script>
	export let member;
</script>

<div
	class="mx-1 mt-20 mb-8 flex  w-full max-w-md flex-col justify-center rounded-md border-2 border-violet-700 bg-violet-700 px-2 text-center text-gray-900 shadow-md shadow-violet-700 md:mx-6 md:px-6 lg:mx-6  lg:px-8 xl:mx-6 xl:px-8"
>
	<img
		alt={member.fullName}
		class="-mt-20 h-40 w-40 border-2 border-violet-700 flex-shrink-0 self-center rounded-lg bg-gray-500 bg-cover bg-center"
		src={member.img}
	/>
	<div class="my-2 flex-1">
		<p class="md:text-5xl lg:text-5xl xl:text-5xl text-4xl  font-black leading-snug">{member.fullName}</p>
		<p class="md:text-3xl lg:text-3xl xl:text-3xl text-2xl font-bold">{member.function}</p>
	</div>
	<div class="flex items-center justify-center space-x-3 border-t-2 p-3">
		<a
			rel="noopener noreferrer"
			href={member.linkedin}
			title="LinkedIn"
			class="text-gray-900 hover:text-violet-400"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 32 32"
				class="h-16 w-16"
			>
				<path
					d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"
				/>
			</svg>
		</a>

		<a
			rel="noopener noreferrer"
			href={member.github}
			title="GitHub"
			class="text-gray-900 hover:text-violet-400"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 32 32"
				class="h-16 w-16"
			>
				<path
					d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
				/>
			</svg>
		</a>
	</div>
</div>
