const express = require('express');
const { getStars } = require('./star.controller');
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getStars);

module.exports = router;
