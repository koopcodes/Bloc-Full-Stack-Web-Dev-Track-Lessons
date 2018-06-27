var customerInfoMap = new Map();
var phoneNumber, name, address;

function lookUpCustomer() {
	phoneNumber = prompt('Search for Customer by Phone Number ###-###-####');
	if (customerInfoMap.get(phoneNumber)) {
		displayCustomerInfoMap(phoneNumber);
	} else {
		enterCustomerInfo(phoneNumber);
	}
}

function enterCustomerInfo(phoneNumber) {
	alert('Customer Does not exist. Clear this meassage to enter info');
	name = prompt('Enter Name');
	address = prompt('Enter address');
	customerInfoMap.set(phoneNumber, { name: customerName, address: customerAddress, phone: customerPhone });
	console.log(customerInfoMap.get(phoneNumber).name);
	console.log(customerInfoMap.get(phoneNumber).address);
	console.log(customerInfoMap.get(phoneNumber).phone);
	console.log('Customer Info Entered!');
}

function displayCustomerInfoMap(phoneNumber) {
	console.log('Name: ' + customerInfoMap.get(phoneNumber).name);
	console.log('Adress: ' + customerInfoMap.get(phoneNumber).address);
	console.log('Phone: ' + customerInfoMap.get(phoneNumber).phone);
}

lookUpCustomer();
