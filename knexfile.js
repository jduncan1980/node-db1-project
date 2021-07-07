// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/budget.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
			tableName: 'knex_migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},

	production: {
		client: 'postgresql',
		connection: 'postgresql://localhost/accounts',
	},
	migrations: {
		directory: './data/migrations',
		tableName: 'knex_migrations',
	},
	seeds: {
		directory: './data/seeds',
	},
};

// module.exports = {
// 	development: {
// 		client: 'sqlite3',
// 		connection: {
// 			filename: './data/budget.db3',
// 		},
// 		useNullAsDefault: true,
// 		migrations: {
// 			directory: './data/migrations',
// 			tableName: 'knex_migrations',
// 		},
// 		seeds: {
// 			directory: './data/seeds',
// 		},
// 	},

// 	// update the following configuration to use PostgreSQL
// 	production: {
// 		client: 'pg',
// 		connection: {
// 			host: 'localhost', // if the server is not running on your computer provide the network address
// 			database: 'accounts', // <-- update
// 			user: 'jasonduncan', // <-- update
// 			password: 'PassWord', // <-- update
// 		},
// 		pool: {
// 			min: 2,
// 			max: 10,
// 		},
// 		migrations: {
// 			directory: './data/migrations',
// 			tableName: 'knex_migrations',
// 		},
// 		seeds: {
// 			directory: './data/seeds',
// 		},
// 	},
// };
