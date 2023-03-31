<script>
	import { StepsList, TableOfСontents } from '../../entities';
	import { mainTocData } from '../../shared';
import { page } from '$app/stores';

	const instrustionSteps = [
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: ''
		}
	];

	$: toc = mainTocData;
</script>

<!-- <StepsList steps={instrustionSteps}/> -->

<section class="flex h-screen flex-col items-center justify-center pb-10">
	<div class="container mx-auto max-w-6xl space-y-6 p-6 sm:space-y-12">
    <TableOfСontents {toc} />
	</div>
</section>
