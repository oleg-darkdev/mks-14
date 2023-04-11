<script>
	import { StepItem } from '../../../entities';
	import { getGameData } from '../../../shared';
</script>

<!-- <section class="bg-gray-900 text-gray-100">
	<div class="container mx-auto flex flex-col p-6">
		<h2 class="py-4 text-center text-3xl font-bold">Jak dostać grę</h2>
		<div class="divide-y divide-violet-700 flex flex-row flex-wrap justify-center">
			{#each getGameData as step}
				<StepItem {step} />
			{/each}
		</div>
	</div>
</section> -->

<section class="py-6  text-gray-50">
	<div
		class="container mx-auto flex flex-col items-center justify-center p-4 sm:p-10 md:w-full lg:w-8/12 lg:flex-row"
	>
		<div
			class="flex flex-1 flex-col items-center justify-center rounded-tl-lg rounded-bl-lg border-2 border-violet-700 bg-gray-800 bg-gray-900 bg-gray-900 p-6 p-4 pb-8 shadow-md shadow-violet-700 sm:p-8 lg:p-16"
		>
			<span class="text-sm">Basic</span>
			<p class="text-center text-5xl font-bold">39€</p>
			<p class="text-center font-semibold">
				Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos
				voluptatibus sequi cum, non nesciunt aspernatur a?
			</p>
			<ul class="flex-1 px-2 py-8">

			</ul>
			<button class="mt-6 rounded border border-gray-700 px-8 py-3 text-lg font-semibold sm:mt-12"
				>Sign up</button
			>
		</div>
		<div
			class="flex flex-1 flex-col items-center justify-center rounded-tr-lg rounded-br-lg border-2 border-violet-700 bg-violet-700 p-4 pb-8 text-center text-gray-900 sm:p-8 lg:p-16"
		>
			<span class="text-sm font-semibold">Advanced</span>
			<p class="text-5xl font-bold">89€</p>
			<p class="font-semibold">
				Nemo deserunt possimus quo provident recusandae! Dolores qui architecto omnis pariatur eos
				voluptatibus sequi cum, non nesciunt aspernatur a?
			</p>
			<button class="mt-6 rounded bg-gray-800 px-8 py-3 text-lg font-semibold text-gray-50 sm:mt-12"
				>Sign up</button
			>
		</div>
	</div>
</section>

<section class=" text-gray-100">
	<div class="container mx-auto overflow-x-auto p-6">
		<table class="w-full">
			<caption class="sr-only">Pricing plan comparison</caption>
			<thead>
				<tr>
					<th />
					<th scope="col">
						<h2 class="px-2 text-lg font-medium">Starter</h2>
						<p class="mb-3">
							<span class="text-2xl font-bold text-gray-50 sm:text-4xl">0€</span>
							<span class="font-medium text-gray-400">/mo</span>
						</p>
					</th>
					<th scope="col">
						<h2 class="px-2 text-lg font-medium">Standard</h2>
						<p class="mb-3">
							<span class="text-2xl font-bold text-gray-50 sm:text-4xl">19€</span>
							<span class="font-medium text-gray-400">/mo</span>
						</p>
					</th>
					<th scope="col">
						<h2 class="px-2 text-lg font-medium">Premium</h2>
						<p class="mb-3">
							<span class="text-2xl font-bold text-gray-50 sm:text-4xl">49€</span>
							<span class="font-medium text-gray-400">/mo</span>
						</p>
					</th>
				</tr>
			</thead>
			<tbody class="space-y-6 divide-y divide-gray-700 text-center">
				<tr>
					<th scope="row" class="text-left">
						<h3 class="py-3">Euismod</h3>
					</th>
					<td>
						<span class="block text-sm">1</span>
					</td>
					<td>
						<span class="block text-sm">10</span>
					</td>
					<td>
						<span class="block text-sm">100</span>
					</td>
				</tr>
				<tr>
					<th scope="row" class="text-left">
						<h3 class="py-3">Principes et</h3>
					</th>
					<td>
						<span class="block text-sm">0,5 GB</span>
					</td>
					<td>
						<span class="block text-sm">5 GB</span>
					</td>
					<td>
						<span class="block text-sm">500 GB</span>
					</td>
				</tr>
				<tr>
					<th scope="row" class="text-left">
						<h3 class="py-3">Et mel porro</h3>
					</th>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Included in Free plan"
							class="mx-auto h-5 w-5 text-violet-400"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Included in Standard plan"
							class="mx-auto h-5 w-5 text-violet-400"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Included in Premium plan"
							class="mx-auto h-5 w-5 text-violet-400"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
				</tr>
				<tr>
					<th scope="row" class="text-left">
						<h3 class="py-3">Veniam suscipiantur</h3>
					</th>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Not included in Free plan"
							class="mx-auto h-5 w-5 text-gray-600"
						>
							<path
								fill-rule="evenodd"
								d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Included in Standard plan"
							class="mx-auto h-5 w-5 text-violet-400"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Included in Premium plan"
							class="mx-auto h-5 w-5 text-violet-400"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
				</tr>
				<tr>
					<th scope="row" class="text-left">
						<h3 class="py-3">Ornatus tacimates</h3>
					</th>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Not included in Free plan"
							class="mx-auto h-5 w-5 text-gray-600"
						>
							<path
								fill-rule="evenodd"
								d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Not included in Standard plan"
							class="mx-auto h-5 w-5 text-gray-600"
						>
							<path
								fill-rule="evenodd"
								d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Included in Premium plan"
							class="mx-auto h-5 w-5 text-violet-400"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
				</tr>
				<tr>
					<th scope="row" class="text-left">
						<h3 class="py-3">Aliquam fastidii in mei</h3>
					</th>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Not included in Free plan"
							class="mx-auto h-5 w-5 text-gray-600"
						>
							<path
								fill-rule="evenodd"
								d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Not included in Standard plan"
							class="mx-auto h-5 w-5 text-gray-600"
						>
							<path
								fill-rule="evenodd"
								d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
					<td>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-label="Included in Premium plan"
							class="mx-auto h-5 w-5 text-violet-400"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
