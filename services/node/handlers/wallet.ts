export async function getWallet(ctx: Context, next: () => Promise<any>) {
  const {
        clients: { externalMasterData },
      } = ctx
  ctx.status = 200
  ctx.body = await externalMasterData.getWallet('',30,1)
  ctx.set('cache-control', 'no-cache')

  await next()
}

export async function postWallet(ctx: Context, next: () => Promise<any>) {
  const {
        clients: { externalMasterData },
      } = ctx
  ctx.status = 200
  ctx.body = await externalMasterData.postWallet()
  ctx.set('cache-control', 'no-cache')

  await next()
}

export async function deleteWallet(ctx: Context, next: () => Promise<any>) {
  const {
        clients: { externalMasterData },
      } = ctx
  ctx.status = 200
  ctx.body = await externalMasterData.deleteWallet()
  ctx.set('cache-control', 'no-cache')

  await next()
}

