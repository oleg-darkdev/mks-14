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

<section class="flex lg:min-h-screen xl:min-h-screen md:min-h-screen h-auto flex-col items-center justify-center xl:pb-10 md:pb-14 pb-36 lg:pb-10">
	<div class="container mx-auto max-w-6xl space-y-6 xl:p-6 lg:p-6 md:p-4 p-2 ">
    <TableOfСontents {toc} />
	</div>
</section>
