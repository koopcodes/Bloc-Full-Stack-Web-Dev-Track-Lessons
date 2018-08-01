<p style="text-align: center; font-weight:bold">WDT Module 3 - Computer Science Fundamentals<br>Section 2 - Data Structures<br>Checkpoint 2 - Hash Tables</p>

# Exercises

### For exercises requiring code, you are free to use the language of your choice

**1. What is a hash table?**

> A hash table is a data structure that is used to store key/value pairs. It uses a hash function to compute an index into an array in which an element will be inserted or searched. The reason and result? Speed when working with a LARGE number of elements. Under reasonable assumptions the average time required to search for an element in a hash table is O(1)

**2. What is hashing?**
> Hashing is used to index and retrieve items in a database because it is easier to find the item using the shortened hashed key than using the original value. Hashing is generating a value or values from a string of text using a mathematical function, transforming a string of characters into a usually shorter fixed-length value or key that represents the original string. Using this fixed length key to index and retrieve items in a database is faster finding the item using the shorter hashed key than to find it using the original value.

**3. How does a hash table store data?**
> Starting with the key of a key-value pair take the key, convert the key to a hash code using a hashing function, then mod the hash code to get an array index, finally storing the value in the array at that index.

**4. How are hash tables and objects different?**
> Lots of discussion about this but few clear and definitive answers so this is a great question to ask. Best answer I found was from Mozilla:

| Difference              | Hash Table            | Object                   |
| :---------------------- | :-------------------- | :----------------------- |
| Keys                    | Anything              | Strings and Symbols only |
| Get Size                | `.size` property      | Count "manually"         |
| Iteration               | Directly Iterable     | Get keys then iterate    |
| Performance<sup>1</sup> | Faster                | Slower                   |
| Prototype<sup>2</sup>   | No                    | Yes                      |
| Use case<sup>3</sup>    | Look Up and Insertion | Logical Operations       |

<sup>1</sup> With operations involving frequent additions and removals
<sup>2</sup> Default inherited Object keys could collide with your keys
<sup>3</sup> Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type. Use objects when there is logic that operates on individual elements.

**5. Determine whether you would use a hash table or an object to store each of the following pieces of data:**


A list of pets and their unique names.
> A: Hash Table

The name, age, and the birthday of your best friend.
> A: Object

The name and location of every company in a given city.
> A: Hash Table

All of the books checked out from a library by a particular individual.
> A: Hash Table

The primary and secondary phone numbers for a contact.
> A: Hash Table

**6. Build a system that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers. Store this information in a hash table.**

```javascript
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
```

**7. Build a system that allows a store owner to track their store's inventory using a hash table for storage.**

```javascript
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
```

**8. Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data.**

```javascript
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
	alert("The desired newspaper for this date is not available. Clear this meassage to enter that edition's text");

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
```
