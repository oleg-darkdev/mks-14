function generateMap(dataArr) {
	let count = 2,
		mapGrid = [];

	for (let s = 0, e = count; s < dataArr.length; s += count, e += count)
		mapGrid.push(dataArr.slice(s, e));

	return mapGrid;
}

export default generateMap;
