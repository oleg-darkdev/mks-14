<script>
	const TOC = [
		{
			title: 'Lorem ipsum is placeholder text',
			id: '1',
			img: '',

			desc: [
				'Lorem ipsum is placeholder text commonly',
				'Lorem ipsum is placeholder text commonly',
				'Lorem ipsum is placeholder text commonly'
			]
		},
		{
			title: 'Lorem ipsum is placeholder text',
			id: '2',
			img: '',

			desc: [
				'Lorem ipsum is placeholder text commonly',
				'Lorem ipsum is placeholder text commonly',
				'Lorem ipsum is placeholder text commonly'
			]
		},
		{
			title: 'Lorem ipsum is placeholder text',
			id: '3',
			img: '',

			desc: [
				'Lorem ipsum is placeholder text commonly',
				'Lorem ipsum is placeholder text commonly',
				'Lorem ipsum is placeholder text commonly'
			]
		},
		{
			title: 'Lorem ipsum is placeholder text',
			id: '4',
			img: '',
			desc: [
				'Lorem ipsum is placeholder text commonly',
				'Lorem ipsum is placeholder text commonly',
				'Lorem ipsum is placeholder text commonly'
			]
		}
	];
</script>

<div
	class="container mx-auto flex w-full flex-col items-center justify-center rounded-lg bg-white shadow dark:bg-gray-800"
>
	<ul class="divide flex flex-col divide-y">
		{#each TOC as navigation}
			<li class="flex flex-row">
				<div class="flex flex-1 cursor-pointer select-none items-center p-4">
					<div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
						<a href="#" class="relative block">
							<img
								alt="profil"
								src={navigation.img}
								class="mx-auto h-10 w-10 rounded-full object-cover "
							/>
						</a>
					</div>
					<div class="mr-16 flex-1 pl-1">
						<div class="font-medium dark:text-white">{navigation.title}</div>
						<div class="text-sm text-gray-600 dark:text-gray-200">
							{#each navigation.desc as desc}
								<span>/ {desc} </span>
							{/each}
						</div>
					</div>
					<button class="flex w-24 justify-end text-right">
						<svg
							width="20"
							fill="currentColor"
							height="20"
							class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
							/>
						</svg>
					</button>
				</div>
			</li>
		{/each}
	</ul>
</div>
