export async function queryClientWallet(
  _: unknown,
  { userId }: { userId: string },
  ctx: Context
) {
  
    const {clients : {walletManager}} =  ctx 

    let value =  await walletManager.getWallet(userId)

    return value
      
 }
