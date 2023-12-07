
//styles
import '@scss/globals.scss';
import './styles.css'

//modules
// import MobileMenu from '@components/global/MobileMenu';

//providers
import { AppProvider } from '@providers/AppProvider';
import Mobile from '@components/global/Mobile';

function MyApp({ Component, pageProps }) {
  return (
		<AppProvider>
      {/* <MobileMenu /> */}
			<Mobile />
			<Component {...pageProps} />
		</AppProvider>
	)
}

export default MyApp
