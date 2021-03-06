// this file allows us to use a global css files and css modules
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}