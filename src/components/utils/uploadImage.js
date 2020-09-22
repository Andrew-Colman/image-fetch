/* eslint-disable no-unused-vars */
const axios = require('axios');

const IMGBB_API_KEY = process.env.REACT_APP_IMGBB_API_KEY;

// eslint-disable-next-line consistent-return
export default async function uploadImage(url) {
  const params = new URLSearchParams();
  params.append('image', url);

  const saveImage = ({ data }, oldUrl) => {
    console.log({ id: data.id, url: `${data.image.url}`, oldUrl }); // save img to localStorage
    const savedUrl = data.image.url;
    return savedUrl;
  };

  try {
    const result = await axios({
      method: 'post',
      url: `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params,
    });
    console.log(result.data);
    return saveImage(result.data, url); // <- send to localStorage
  } catch (error) {
    console.log(error);
  }
}
