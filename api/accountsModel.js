const db = require('../data/dbConfig.js');

const get = () => {
	return db('accounts');
};

const getById = (id) => {
	return db('accounts').where({ id }).first();
};

async function insert(account) {
	const id = await db('accounts').insert(account, 'id');
	return await getById(id[0]);
}

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
