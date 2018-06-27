let hash = require('string-hash');

class DumbMap {
	constructor() {
		this.list = [];
	}

	get(key) {
		let index = hash(key);

		if (!this.list[index]) {
			return undefined;
		}

		let result;

		this.list[index].forEach(keyValuePair => {
			if (keyValuePair[0] === key) {
				result = keyValuePair[1] + keyValuePair[2];
			}
		});

		return result;

	}

	set(key, name, address) {
		let index = hash(key);
		if (!this.list[index]) {
			this.list[index] = [];
		}

		this.list[index].push([key, 'Name: ' + name, 'Address: '+ address]);
	}
}

let m = new DumbMap();

m.set('510-235-8956', 'Koop', '340 Goshen Ct San Ramon');
m.set('515-415-8963', 'Loop', '341 Goshen Ct San Ramon');
m.get('510-235-8956');
