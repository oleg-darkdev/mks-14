<script>
	import { StepsList, TableOfСontents } from '../../entities';
	import { mainTocData } from '../../shared';

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

<section class="flex h-full flex-col items-center justify-center pb-10">
	<TableOfСontents {toc} />
</section>
