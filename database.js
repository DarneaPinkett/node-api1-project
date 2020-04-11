const shortid = require("shortid")


let users = [
	{ id: shortid.generate(), name: "Jane Doe", bio: "Books are Life" },
	{ id: shortid.generate(), name: "John Doe", bio: "Customer car is number one" },
	{ id: shortid.generate(), name: "Jack Doe", bio: "This is a mans world" },
]

function getUsers() {
	return users
}

function getUserById(id) {
	return users.find(u => u.id === id)
}

function createUser(data) {
	const payload = {
		id: shortid.generate(),
		...data,
	}

	users.push(payload)
	return payload
}

function updateUser(id, data) {
	const index = users.findIndex(u => u.id === id)
	users[index] = {
		...users[index],
		...data,
	}
	
	return users[index]
}

function deleteUser(id) {
	users = users.filter(u => u.id != id)
}

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
}