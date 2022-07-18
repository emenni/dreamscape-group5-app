export async function createWalletRecords(ctx:StatusChangeContext, next: () => Promise<any>
  ) {
    
    const {
        clients: { orderClient },
      } = ctx

     await orderClient.addCredit(ctx.body.orderId)


    await next()
  } 
