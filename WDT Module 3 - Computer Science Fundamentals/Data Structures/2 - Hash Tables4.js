var newspaperMap = new Map();
var paperName, paperDate, paperText;
var mapKey = paperName + paperDate;

function lookUpNewspaper() {
	paperName = prompt('Name of newspaper');
	paperDate = prompt('Date of newspaper (MM-DD-YYYY)');

	if (newspaperMap.get(mapKey)) {
		displayNewspaper(mapKey);
	} else {
		enterNewspaper(mapKey);
	}
}

function enterNewspaper(mapKey) {
	alert('The desired newspaper for this date is not available. Clear this meassage to enter that edition\'s text');

	paperText = prompt('Enter the text you wish to save');
	newspaperMap.set(mapKey, {
		paper: paperName,
		date: paperDate,
		text: paperText,
	});
	console.log(newspaperMap.get(mapKey).paper);
	console.log(newspaperMap.get(mapKey).date);
	console.log(newspaperMap.get(mapKey).text);
	console.log('Newspaper Entered!');
}

function displayNewspaper(mapKey) {
	console.log('Newspaper: ' + newspaperMap.get(mapKey).paper);
	console.log('Date Published: ' + newspaperMap.get(mapKey).date);
	console.log('Newspaper Text: ' + newspaperMap.get(mapKey).text);
}

lookUpNewspaper();
