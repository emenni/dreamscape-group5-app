export async function getWallet(ctx: Context, next: () => Promise<any>) {

  console.log('Midlware wallet')
  //const {        clients: { walletManager }      } = ctx 
   ctx.status = 200
  
console.log(ctx.req)
  //ctx.body = await walletManager.getWallet(ctx.body.userId)
  ctx.set('cache-control', 'no-cache')

  await next()
}
