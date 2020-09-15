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

📱  Responsive Web design
```

##### Additional packages:

[Axios](https://github.com/axios/axios): Promise based HTTP client

[Reactstrap](https://reactstrap.github.io/): Bootstrap 4 React components

[React-router](https://reactrouter.com/): Dynamic routes

[Dot env](https://www.npmjs.com/package/dotenv): Environment variables

```js
//if you clone this repo make a .env file with:
REACT_APP_API_KEY='your pixabay api key' // (dev)

PIXABAY_API_KEY='your pixabay api key' // (production)
//and cors must be enabled in the host

get your api key here:
```

- https://pixabay.com/api/docs/

> **[Pixabay](https://pixabay.com/) is a free public domain image repository (CC0)**

_Related project: [spectralapps/image-crop](https://github.com/spectralapps/image-crop)_
