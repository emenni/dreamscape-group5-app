import { IOClients } from '@vtex/api'
import Analytics from '../clients/analytics'
import ExternalMasterdata from '../clients/externalMD'


// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

    public get analytics() {
     return this.getOrSet('analytics', Analytics)
 }
 public get externalMasterData() {
    return this.getOrSet('externalMasterData', ExternalMasterdata)
}
}