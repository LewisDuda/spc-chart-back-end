import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.get('/', (req, res) => {
	res.send('The server is working!');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
