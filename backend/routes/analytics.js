const express = require('express');
const router = express.Router();

// Placeholder routes for analytics module
router.get('/', (req, res) => {
  res.json({ message: 'Analytics module' });
});

module.exports = router;
