const axios = require('axios');

const IMGBB_API_KEY = process.env.IMGBB_API_KEY || process.env.REACT_APP_IMGBB_API_KEY;

export default async function uploadImage(req, res) {
  const { url } = req.body;

  const params = new URLSearchParams();
  params.append('image', url);

  try {
    const result = await axios({
      method: 'post',
      url: `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params,
    });

    res.status(200).json(result.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('err');
  }
}
