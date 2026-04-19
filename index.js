const express = require('express');

const app = express();

// ✅ Works in both dev + container
const PORT = process.env.PORT || 3000;

// Basic routes
app.get('/', (req, res) => {
  res.send('🚀 AcadHost Project Running Successfully  this is to rechecking');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
