import { Provider } from 'urql';
import '../styles/globals.css';
import { client, ssrCache } from '../lib/urql';
import {GetServerSideProps} from 'next';
import { PageDocument } from '../generated/graphql';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {

  if(pageProps.urqlState){
    ssrCache.restoreData(pageProps.urqlState);
  }
  
  return (
    <Provider value={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, {
    slug: 'home'
  }).toPromise();


  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}

export default MyApp
