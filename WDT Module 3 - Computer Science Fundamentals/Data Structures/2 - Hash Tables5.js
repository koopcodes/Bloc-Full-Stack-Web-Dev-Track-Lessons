var inventoryMap = new Map();
var partNumber, partQuantity, partDescription;

function lookUpQuantity() {
	partNumber = prompt('Search for Part Number ');
	if (inventoryMap.get(partNumber)) {
		displayinventoryMap(partNumber);
	} else {
		enterPartInfo(partNumber);
	}
}

function enterPartInfo(partNumber) {
	alert('Part Does not exist. Clear this meassage to enter info');
	partQuantity = prompt('How many in stock?');
	partDescription = prompt('Description');
	inventoryMap.set(partNumber, {
		part: partNumber,
		quantity: partQuantity,
		description: partDescription,
	});
	console.log(inventoryMap.get(partNumber).part);
	console.log(inventoryMap.get(partNumber).quantity);
	console.log(inventoryMap.get(partNumber).description);
	console.log('Part Info Entered!');
}

function displayinventoryMap(partNumber) {
	console.log('Part#: ' + inventoryMap.get(partNumber).part);
	console.log('Quantity: ' + inventoryMap.get(partNumber).quantity);
	console.log('Description: ' + inventoryMap.get(partNumber).description);
}

lookUpQuantity();
