export async function clientWallet(ctx: Context, next: () => Promise<any>) {

 //const { clients: { walletManager } } = ctx 
  
  ctx.status = 200

  console.log(ctx.res)
  //ctx.body = await walletManager.getWallet(ctx)
  //ctx.set('cache-control', 'no-cache')

  await next()
}
