const express = require('express');
const accounts = require('./accountsModel');
const router = express.Router();
const {
	validateAccount,
	validateAccountId,
} = require('../middleware/validate');

router.get('/', async (req, res, next) => {
	try {
		const response = await accounts.get();
		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', validateAccountId(), async (req, res, next) => {
	try {
		// const account = await accounts.getById(req.params.id);
		res.status(200).json(req.account);
	} catch (error) {
		next(error);
	}
});

router.post('/', validateAccount(), async (req, res, next) => {
	try {
		const account = await accounts.insert(req.body);
		res.status(201).json(account);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', validateAccountId(), async (req, res, next) => {
	try {
		await accounts.remove(req.params.id);
		res.status(200).json(req.account);
	} catch (error) {
		next(error);
	}
});

router.put(
	'/:id',
	validateAccountId(),
	validateAccount(),
	async (req, res, next) => {
		try {
			await accounts.update(req.params.id, req.body);
			const response = await accounts.getById(req.params.id);
			res.status(200).json(response);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
