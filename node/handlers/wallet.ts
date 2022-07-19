import { json } from 'co-body';
export async function clientWallet(ctx: Context, next: () => Promise<any>) {

 const { clients: { walletManager } } = ctx 
  
  ctx.status = 200


  const body = await json(ctx.req)
  ctx.body = await walletManager.getWallet(body.userId)
  ctx.set('cache-control', 'no-cache')

  await next()
}
