// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// // Route to fetch top anime
// app.get('/api/top-anime', async (req, res) => {
//   try {
//     const response = await axios.get('https://api.jikan.moe/v4/top/anime');
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch anime data' });
//   }
// });

// // Route to fetch anime by ID
// app.get('/api/anime/:id', async (req, res) => {
//   try {
//     const response = await axios.get(`https://api.jikan.moe/v4/anime/${req.params.id}/full`);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch anime details' });
//   }
// });

// // Route to search anime
// app.get('/api/search/:query', async (req, res) => {
//   try {
//     const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${req.params.query}`);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to search anime' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Route to fetch top anime
app.get('/api/top-anime', async (req, res) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch top anime' });
  }
});

// Route to fetch anime by genre
app.get('/api/anime-by-genre/:genreId', async (req, res) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?genres=${req.params.genreId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime by genre' });
  }
});

// Route to fetch genres
app.get('/api/genres', async (req, res) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/genres/anime');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch genres' });
  }
});

// Route to fetch anime by ID
app.get('/api/anime/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${req.params.id}/full`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime details' });
  }
});

// Route to search anime
app.get('/api/search/:query', async (req, res) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${req.params.query}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search anime' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

