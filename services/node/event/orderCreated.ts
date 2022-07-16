import { Clients } from '../clients/index'
import { EventContext } from '@vtex/api'


export async function createWalletRecords(ctx: EventContext<Clients>) {
const orderCreated = await ctx.clients.walllet.credit()
console.log('Order Created: ', orderCreated)
return true
  }