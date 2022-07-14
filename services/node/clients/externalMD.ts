import {ExternalClient, InstanceOptions, IOContext} from '@vtex/api'

export default class ExternalMasterdata extends ExternalClient{
    constructor( context: IOContext, options?: InstanceOptions){
        super(`http://${context.account}.vtexcommercestable.com.br`, context,{...options,headers:{
            ...options?.headers,
            ...(context.authToken ? {VtexIdclientAutCookie: context.authToken} : null),
            'Content-Type':'application/json',
        }})        
    }


public getUser = (filter:string, perPage: number,pageNumber:number) => {


const startIndex = (pageNumber - 1) * perPage
const endIndex = startIndex + perPage

return this.http.get(`api/dataentities/CL/search?_fields=all${filter ? `&${filter}`:''}`,{
    metric:'crm-get-users',headers:{'REST-Range':`resources=${startIndex}-${endIndex}`}
})

}


}