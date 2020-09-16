const accounts = require('../api/accountsModel');

const validateAccountId = () => {
	return (req, res, next) => {
		accounts
			.getById(req.params.id)
			.then((account) => {
				if (account) {
					req.account = account;
					next();
				} else {
					res.status(404).json({ message: 'Account Not Found.' });
				}
			})
			.catch((err) => {
				next(err);
			});
	};
};

const validateAccount = () => {
	return (req, res, next) => {
		if (!req.body.name || !req.body.budget) {
			res.status(400).json({ message: 'Missing Account Data.' });
		} else {
			next();
		}
	};
};

module.exports = {
	validateAccountId,
	validateAccount,
};
