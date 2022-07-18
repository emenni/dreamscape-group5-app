import {ExternalClient, InstanceOptions, IOContext} from '@vtex/api'

export default class WalletManager extends ExternalClient{
    constructor( context: IOContext, options?: InstanceOptions){
        super(`http://${context.account}.vtexcommercestable.com.br`, context,{...options,headers:{
            ...options?.headers,
            ...(context.authToken ? {VtexIdclientAutCookie: context.authToken} : null),
            'Content-Type':'application/json',
        }})        
    }

public addCredit = (orderId:string) => {

 (async () => {
    let ret = await this.http.get(`/api/oms/pvt/orders/${orderId}`)
    
    console.log('Order Payments  ----->',ret.paymentData.transactions[0].payments)
    
 })()
}

public getWallet = (filter:string, perPage: number,pageNumber:number) => {

    const startIndex = (pageNumber - 1) * perPage
    const endIndex = startIndex + perPage
    
    return this.http.get(`api/dataentities/TT/search?_fields=_all${filter ? `&${filter}`:''}`,{
        headers:{'REST-Range':`resources=${startIndex}-${endIndex}`}
    })
    
    }  

}