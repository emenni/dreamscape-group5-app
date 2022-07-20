export async function createWalletRecords(ctx:StatusChangeContext, next: () => Promise<any>
  ) {
 
    console.log("ENTROU middleware")
    const {
        clients: { walletManager },
      } = ctx

     await walletManager.addCredit(ctx.body.orderId)

    await next()
  } 
