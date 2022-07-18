export async function createWalletRecords(ctx:StatusChangeContext, next: () => Promise<any>
  ) {
    
    const {
        clients: { walletManager },
      } = ctx

     await walletManager.addCredit(ctx.body.orderId)


    await next()
  } 
