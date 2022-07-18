import {ExternalClient, InstanceOptions, IOContext} from '@vtex/api'

export default class OrderClient extends ExternalClient{
    constructor( context: IOContext, options?: InstanceOptions){
        super(`http://${context.account}.vtexcommercestable.com.br`, context,{...options,headers:{
            ...options?.headers,
            //...(context.authToken ? {VtexIdclientAutCookie: context.authToken} : null),
            'X-VTEX-API-AppKey':'vtexappkey-dreamscape-FMYVGX',
            'X-VTEX-API-AppToken':'BJAZBUUCECOLTNJLGRQDTJIILLWRQSTKJYUKLVIJBOSHOJSEXVLMJTDPXAUMNSRDTXEOUFZTBZRDVOXFTTJGYVXUWUPIOXENMWGDXXVQHASKUJWGDFAXNHLRBFEJPURG',
            'Content-Type':'application/json',
        }})        
    }


public getOrder = (orderId:string) => {

 (async () => {
    let ret = await this.http.get(`/api/oms/pvt/orders/${orderId}`)
    
    
    console.log(ret.totals[0].value)
    
 })()


}

}