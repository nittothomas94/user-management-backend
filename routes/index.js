const express = require('express');

const userRoutes = require('./user-route');
const ImageRoute = require('./image-route');
const router = express.Router();

router.use('/users', userRoutes);
router.use('/upload-image', ImageRoute);

module.exports = router;
