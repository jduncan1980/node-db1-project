const db = require('../data/dbConfig.js');

const get = () => {
	return db('accounts');
};

const getById = (id) => {
	return db('accounts').where({ id }).first();
};

const insert = (account) => {
	return db('accounts')
		.insert(account)
		.then((id) => getById(id));
};

const update = (id, changes) => {
	return db('accounts').where({ id }).update(changes);
};

const remove = (id) => {
	return db('accounts').where({ id }).del();
};

module.exports = {
	get,
	getById,
	insert,
	update,
	remove,
};
