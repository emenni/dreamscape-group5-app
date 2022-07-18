import {ExternalClient, InstanceOptions, IOContext} from '@vtex/api'

export default class Wallet extends ExternalClient{

    constructor( context: IOContext,  options?: InstanceOptions){
        super(`http://${context.account}.vtexcommercestable.com.br`, context,{...options,headers:{
            ...options?.headers,
            ...(context.authToken ? {VtexIdclientAutCookie: context.authToken} : null),
            'Content-Type':'application/json',
        }})       
    }

public credit = () => {

// const order = {clientId:this.context.eventInfo?.key['clientId'],points:this.context.eventInfo?.key['value']}
//return this.http.post('api/dataentities/TT/documents',order)

return console.log(this)

}

public postWallet = () => {

    const dados = {pts:'500'}
    return this.http.post('api/dataentities/TT/documents',dados)
}

public getWallet = (filter:string, perPage: number,pageNumber:number) => {


    const startIndex = (pageNumber - 1) * perPage
    const endIndex = startIndex + perPage
    
    return this.http.get(`api/dataentities/TT/search?_fields=_all${filter ? `&${filter}`:''}`,{
        headers:{'REST-Range':`resources=${startIndex}-${endIndex}`}
    })
    
    }  

 public deleteWallet = () => {

    return this.http.delete('api/dataentities/DS/documents')
        
    }   

}