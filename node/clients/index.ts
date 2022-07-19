import { IOClients } from '@vtex/api'
import WalletManager from './walletManager'


// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

 public get walletManager() {
    return this.getOrSet('walletManager', WalletManager)
}

}