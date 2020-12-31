## Project Description

This React App fetch **Pixabay** api information then displays a gallery of images with Author's name and number of total downloads

### _https://image-fetch.vercel.app/_

> Users can search images and choose image colors

> Image type (Photo/Vector/Illustration), limit the results (max 20)

> Download any Image or save them to local /gallery

### React Features:

```rb
Hooks: useState, useEffect, useRef, useContext


-> Context Api #state management

-> React lazy #code splitting

-> Suspense #useful loading states

Custom react hooks: useQuery, useParams, useScroll, useLocalStorage
```

#### Style:

```rb
🔷 Bootstrap 4

💅 Styled components (custom css)

📱 Responsive Web design
```

##### Additional packages:

[Axios](https://github.com/axios/axios): Promise based HTTP client

[Reactstrap](https://reactstrap.github.io/): Bootstrap 4 React components

[React-router](https://reactrouter.com/): Dynamic routes

[Dot env](https://www.npmjs.com/package/dotenv): Environment variables

```js
// if you clone this project make a .env file with: 
REACT_APP_API_KEY='your pixabay api key' // (dev)
REACT_APP_IMGBB_API_KEY='your imgbb api key' // (dev) <- used for saving in /gallery page
PIXABAY_API_KEY='your pixabay api key' // (production)
IMGBB_API_KEY='your imgbb api key' // (production) <- used for saving in /gallery page

// cors must be enabled in the host

get your api keys here:
```

- https://pixabay.com/api/docs/
- https://api.imgbb.com/

> **[Pixabay](https://pixabay.com/) is a free public domain image repository (CC0)**

> **[IMGBB](https://imgbb.com/) is a free image host**

_Related project: [spectralapps/image-crop](https://github.com/spectralapps/image-crop)_
