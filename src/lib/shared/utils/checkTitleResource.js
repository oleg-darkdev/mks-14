function checkTitleResource(title) {
	const regexRound = /round/,
		regexObservatory = /observatory/,
		regexLounge = /lounge/;

	if (regexRound.test(title) || regexObservatory.test(title) || regexLounge.test(title))
		return true;
	return false;
}


export default checkTitleResource