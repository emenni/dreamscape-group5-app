export async function getWallet(ctx: Context, next: () => Promise<any>) {
  const {
        clients: { walletManager },
      } = ctx
  ctx.status = 200
  ctx.body = await walletManager.getWallet('',30,1)
  ctx.set('cache-control', 'no-cache')

  await next()
}