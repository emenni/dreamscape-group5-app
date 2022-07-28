import {  useEffect, useState } from 'react'
import { useFullSession } from 'vtex.session-client'
import type { SessionSuccess } from 'vtex.session-client'
import { useQuery } from 'react-apollo'
import QUERY_CLIENT_WALLET from '../../graphql/getWallet.gql'

function isSessionSuccess(session: any): session is SessionSuccess {
    if (!session) return false
  
    return session.id !== undefined
  }

  export const usePointsBalance = () => {
  
  const [sessionUserId, setSessionUserId] = useState("");
  const [walletBalance, setWalletBalance] = useState("");

  const [hasLoaded, setHasLoaded] = useState(false)
  const [hasLocalError, setHasLocalError] = useState(false)
    
  const  { loading: loadingS, data: dataSession, errorS } = useFullSession({

    variables: {
      items: ['profile.id']                     
    },
    ssr: false, 
    onCompleted: () => {
      setSessionUserId(dataSession?.session?.namespaces?.profile?.id?.value)
    },
  })
  
  const session = dataSession?.session
   
    const { loading: loadingW, data: wallet, error: errorW } = useQuery( QUERY_CLIENT_WALLET, {
      variables: {
        iduser: sessionUserId },      
        ssr: false,
        skip:sessionUserId ? false : true,
        onCompleted: () => {
        },      
      }) 
      

    useEffect(() => {
      
      let id
      
      if (isSessionSuccess(session)) {
        id = session.namespaces?.profile?.id?.value
        if (!id) {
          console.error("Session have not started")
          setHasLocalError(true)
        }
      } else {
        return 
      }
      if (hasLoaded) return
      
      if (!wallet) return
  
      setWalletBalance(wallet?.queryClientWallet[0]?.balance)
      
      
      setHasLoaded(true)

    },[
      wallet,
      hasLoaded
    ])
     
    const isLoading = loadingS || loadingW  
    const hasError = errorS || errorW

    if (hasError) {
      console.error(`There was a error loading the points Balance app.`)
      console.error({
        hasLocalError,
        errorS,
        errorW
      })
    }

     const data = walletBalance || "Compre e ganhe pontos!"

    return {
        data,
        isLoading,
        hasError,
      }
    }