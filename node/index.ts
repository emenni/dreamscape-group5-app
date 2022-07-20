import {  LRUCache,  Service,  ServiceContext,  EventContext,  ParamsContext,  RecorderState,  method} from '@vtex/api'
import { Clients } from './clients'
import { createWalletRecords } from './event/orderCreated'
import { clientWallet } from './middlewares/wallet'
import {  queryClientWallet } from './resolvers/walllet'

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 })
metrics.trackCache('status', memoryCache)

declare global {
  type Context = ServiceContext<Clients,State>
  
  interface StatusChangeContext extends EventContext<Clients> {
    body: {
      domain: string
      orderId: string
      currentState: string
      lastState: string
      currentChangeDate: string
      lastChangeDate: string
    }
  }

  interface State extends RecorderState {
    code: number
  }
}

 const THREE_SECONDS_MS = 3 * 1000
 const CONCURRENCY = 10

export default new Service<Clients,  State, ParamsContext>({
  graphql: {
    resolvers: {
      Query: {
        queryClientWallet,
        helloworld: () => {`Service number: ${Math.random()}`},
      },
    },
  },
  clients: {
    implementation: Clients,
    options: {
      default: {
        retries: 2,
        timeout: 10000,
      },
      events: {
        exponentialTimeoutCoefficient: 2,
        exponentialBackoffCoefficient: 2,
        initialBackoffDelay: 50,
        retries: 1,
        timeout: THREE_SECONDS_MS,
        concurrency: CONCURRENCY,
      },
    },
},
  routes: {
    clientWallet: method({
      POST: [clientWallet],
    }),
  },
  events: {
    orderStatusBroadcasted: createWalletRecords
      },
})
