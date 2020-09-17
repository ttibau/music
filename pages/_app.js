import '../styles/globals.css'
import 'react-h5-audio-player/lib/styles.css';
import { Provider } from 'react-redux'
import store from '../store/store'


function MyApp({ Component, pageProps }) {
  return ( 
    <Provider store={store}>
      <Component {...pageProps} /> 
    </Provider>
  )
}

export default MyApp
