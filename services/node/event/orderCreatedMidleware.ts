

export async function createWalletRecords(ctx:StatusChangeContext, next: () => Promise<any>
  ) {
    
    const {
        clients: { orderClient },
      } = ctx

     await orderClient.getOrder(ctx.body.orderId)


    await next()
  } 
