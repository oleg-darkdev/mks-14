<script>
	import { FeatureText, VerticalImage } from '../../../shared/';

	let featuresBoardgame = [
		{
			title: 'Hard scify',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Eksperymenty rzeczywiste',
			desc: 'W grze gracze poznają prawdziwe eksperymenty naukowe przeprowadzane w kosmosie.'
		},
		{
			title: 'Astronauci, którzy przebywali w kosmosie',
			desc: 'Jako podstawę do stworzenia postaci wykorzystaliśmy prawdziwych astronautów, którzy byli w kosmosie. Historia każdego z bohaterów jest dostępna w aplikacji.'
		},
		{
			title: 'To jest gra kooperacyjna',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Gra dostępna do pobrania i tworzenia PnP',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Kody Qr i aplikacja',
			// Для быстрого получения справочной информации о экспериментах и персонажах, метеоритах.
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		}
	];

	let featuresApp = [
		{
			title: 'Podręczny pomocnik w przygotowaniu do gry',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Informacje uzupełniające i kody qr',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'

			// desc: 'Для быстрого получения справочной информации о экспериментах и персонажах.'
		},
		{
			title: 'Instrukcja elektroniczna',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Odpowiedzi na najczęściej zadawane pytania',
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		},
		{
			title: 'Otwarty kod źródłowy',
			//  dostępny na githubie
			desc: 'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.'
		}
	];
</script>

<section class="bg-gray-900 text-gray-100">
	<div
		class="container mx-auto max-w-xl space-y-24 p-6 py-2 md:py-10 lg:max-w-7xl lg:py-12 lg:px-2 xl:py-12"
	>
		<div class="pt-6">
			<h2
				class="text-center text-2xl font-bold tracking-tight text-gray-50 md:text-3xl lg:text-3xl xl:text-3xl "
			>
				MKS-14 edukacyjna gra planszowa
			</h2>
			<p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-400">
				Quando cetero his ne, eum admodum sapientem ut.
			</p>
		</div>
		<div class="grid lg:grid-cols-2 lg:items-center lg:gap-8">
			<div>
				<h3 class="text-2xl font-bold tracking-tight text-gray-50 sm:text-3xl">
					Opis gry planszowej
				</h3>
				<p class="mt-3 text-lg text-gray-400">
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
					<h3 class="text-2xl font-bold tracking-tight text-gray-50 sm:text-3xl">
						Aplikacja webowa
					</h3>
					<p class="mt-3 text-lg text-gray-400">
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
