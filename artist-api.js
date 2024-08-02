const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json()); // Ensure this is before your route handlers

let artists = [
  { id: 1, name: 'Elvis Presley', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg/800px-Elvis_Presley_promoting_Jailhouse_Rock.jpg' },
  { id: 2, name: 'Michael Jackson', photo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg' },
];

// Initialize the counter with the next ID to use
let nextId = artists.length > 0 ? Math.max(...artists.map(a => a.id)) + 1 : 1;

app.get('/artists', (req, res) => {
  res.json(artists);
});

app.get('/artists/:id', (req, res) => {
  const artist = artists.find(a => a.id === parseInt(req.params.id));
  if (artist) {
    res.json(artist);
  } else {
    res.status(404).send('Artist not found');
  }
});

app.post('/artists', (req, res) => {
  console.log('Request Body:', req.body); // Debugging log
  const { name, photo } = req.body;
  const newArtist = { id: nextId++, name, photo };
  artists.push(newArtist);
  console.log('New Artist Created:', newArtist); // Debugging log
  res.json(newArtist); // Return the full artist object
});

app.put('/artists/:id', (req, res) => {
  console.log('Request Body:', req.body); // Debugging log
  const { name, photo } = req.body;
  const artistIndex = artists.findIndex(a => a.id === parseInt(req.params.id));
  if (artistIndex !== -1) {
    const updatedArtist = { ...artists[artistIndex], name, photo };
    updatedArtist.id = artists[artistIndex].id; // Ensure the ID remains unchanged
    artists[artistIndex] = updatedArtist;
    console.log('Artist Updated:', updatedArtist); // Debugging log
    res.json(updatedArtist); // Return the updated artist object
  } else {
    res.status(404).send('Artist not found');
  }
});

app.delete('/artists/:id', (req, res) => {
  const artistId = parseInt(req.params.id);
  const artistIndex = artists.findIndex(a => a.id === artistId);
  if (artistIndex !== -1) {
    const deletedArtist = artists[artistIndex];
    artists = artists.filter(a => a.id !== artistId);
    console.log('Artist Deleted:', deletedArtist); // Debugging log
    res.status(204).send(); // No content response
  } else {
    console.log('Artist Not Found for Deletion:', artistId); // Debugging log
    res.status(404).send('Artist not found');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});