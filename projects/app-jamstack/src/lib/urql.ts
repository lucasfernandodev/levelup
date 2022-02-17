import {cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange} from 'urql';

const API_API = 'https://api-sa-east-1.graphcms.com/v2/ckzql29c96ayp01z3240r279g/master';

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({isClient : !isServerSide});

const client = createClient({
  url: API_API,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export {client, ssrCache}