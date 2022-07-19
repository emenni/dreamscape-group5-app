import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export default class WalletManager extends ExternalClient {
    constructor(context: IOContext, options?: InstanceOptions) {
        super(`http://${context.account}.vtexcommercestable.com.br`, context, {
            ...options, headers: {
                ...options?.headers,
                ...(context.authToken ? { VtexIdclientAutCookie: context.authToken } : null),
                'Content-Type': 'application/json',
            }
        })
    }

    public addCredit = (orderId: string) => {

        (async () => {

            let dataEntityName = 'WD'

            let { clientProfileData: { userProfileId } , paymentData : { transactions}, shippingData :{ logisticsInfo }  } = await this.http.get(`/api/oms/pvt/orders/${orderId}`)


              let  valorPago = (parseInt(transactions[0].payments[0].value))
              let valorFrete = parseInt(logisticsInfo[0].price);

             let aquiredPoints =  (valorPago  - valorFrete)/100;
     
             aquiredPoints = Math.floor(aquiredPoints) 

             let clientWallet = (await this.http.get(`api/dataentities/${dataEntityName}/search?_fields=_all${`&_where=userId=${userProfileId}`}`))[0]

             if (clientWallet){

                 let { id: walletId , balance : currentBalance } = clientWallet
                 let newBalance = currentBalance + aquiredPoints
                 this.http.patch(`api/dataentities/${dataEntityName}/documents/${walletId}`, { balance: newBalance })
             } else {

                 this.http.post(`api/dataentities/${dataEntityName}/documents/`, { userId: userProfileId, balance: aquiredPoints })

             }          


        })()
    }

    public getWallet = (userId:string) => {

        let dataEntityName = 'WD'

     
        return this.http.get(`api/dataentities/${dataEntityName}/search`,{params:{ _fields: "_all" , _where: `userId=${userId}` }})

    }

}