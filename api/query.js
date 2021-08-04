const axios = require('axios');

const API_KEY = process.env.PIXABAY_API_KEY || process.env.REACT_APP_API_KEY;

export default async function query(req, res) {
  const { query = '', imageType = 'photo', colors = '', per_page = 20 } = req.body;

  const params = `&q=${encodeURIComponent(
    query
  )}&image_type=${imageType}&colors=${colors}&per_page=${per_page}`;

  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}${params}&safesearch=true`
    );

    const pages = Math.ceil(data?.totalHits / per_page);

    const currentPage = 1;

    const hasMorePages = currentPage < pages;

    /**
     * @todo Pagination
     * todo - wip
     */

    res.json({ ...data, pages, hasMorePages });
  } catch (error) {
    console.log(error);
    res.status(500).send('error');
  }
}
