export async function externalMD(ctx: Context, next: () => Promise<any>) {
  const {
        clients: { externalMasterData },
      } = ctx
  ctx.status = 200
  ctx.body = await externalMasterData.getUser('',30,1)
  ctx.set('cache-control', 'no-cache')

  await next()
}
