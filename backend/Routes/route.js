import express from 'express';
import axios from 'axios';

const router = express.Router();

const getVeg =  async (req, res) => {
  try {
    const response = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:GKtAqY-f/vegetables');
    const data = response.data;
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

router.get('/',getVeg)

export default router;
