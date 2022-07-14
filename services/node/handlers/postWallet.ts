export async function postWallet(ctx: Context, next: () => Promise<any>) {
  const {
        clients: { externalMasterData },
      } = ctx
  ctx.status = 200
  ctx.body = await externalMasterData.postWallet()
  ctx.set('cache-control', 'no-cache')

  await next()
}
