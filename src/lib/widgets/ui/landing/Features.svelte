<script>
	import { FeatureText, VerticalImage } from '../../../shared/';

	let featuresBoardgame = [
		{
			title: 'Hard scify',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Реальные эксперименты',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Реальные люди',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Кооперативная игра',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Доступна для PnP',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Qr коды',
			desc: 'Для быстрого получения справочной информации о экспериментах и персонажах, метеоритах.'
		}
	];

	let featuresApp = [
		{
			title: 'Электронный помощник для сетапа игры',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Справочная информация',
			desc: 'Для быстрого получения справочной информации о экспериментах и персонажах.'
		},
		{
			title: 'Электронная инструкция',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Ответы на часто задоваемые вопросы',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Открытый исходный код на github',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		}
	];
</script>

<section class="dark:bg-gray-900 dark:text-gray-100">
	<div class="container mx-auto max-w-xl space-y-24 p-6 py-12 lg:max-w-7xl lg:px-8">
		<div>
			<h2 class="text-center text-3xl font-bold tracking-tight dark:text-gray-50 sm:text-5xl">
				Популяризационная настольная игра
			</h2>
			<p class="mx-auto mt-4 max-w-3xl text-center text-xl dark:text-gray-400">
				Quando cetero his ne, eum admodum sapientem ut.
			</p>
		</div>
		<div class="grid lg:grid-cols-2 lg:items-center lg:gap-8">
			<div>
				<h3 class="text-2xl font-bold tracking-tight dark:text-gray-50 sm:text-3xl">
					Настольная игра
				</h3>
				<p class="mt-3 text-lg dark:text-gray-400">
					Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius
					eripuit quo id. Sit te euismod tacimates.
				</p>
				<div class="mt-12 space-y-12">
					{#each featuresBoardgame as text}
						<FeatureText {text} />
					{/each}
				</div>
			</div>
			<div aria-hidden="true" class="mt-10 lg:mt-0">
				<VerticalImage img="./images/features_boardgame.png " alt="Boardgame" />
			</div>
		</div>

		<div>
			<div class="grid lg:grid-cols-2 lg:items-center lg:gap-8">
				<div class="lg:col-start-2">
					<h3 class="text-2xl font-bold tracking-tight dark:text-gray-50 sm:text-3xl">
						Веб приложение
					</h3>
					<p class="mt-3 text-lg dark:text-gray-400">
						Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea
						his tale nibh dissentias, mei exerci tamquam euripidis cu.
					</p>
					<div class="mt-12 space-y-12">
						{#each featuresApp as text}
							<FeatureText {text} />
						{/each}
					</div>
				</div>
				<div class="mt-10 lg:col-start-1 lg:row-start-1 lg:mt-0">
					<VerticalImage img="./images/features_app.png " alt="App" />
				</div>
			</div>
		</div>
	</div>
</section>
