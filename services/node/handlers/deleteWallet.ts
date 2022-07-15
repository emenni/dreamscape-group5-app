export async function deleteWallet(ctx: Context, next: () => Promise<any>) {
  const {
        clients: { externalMasterData },
      } = ctx
  ctx.status = 200
  ctx.body = await externalMasterData.deleteWallet()
  ctx.set('cache-control', 'no-cache')

  await next()
}
