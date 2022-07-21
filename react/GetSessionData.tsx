import React,{ useEffect, useState} from 'react'
import { useFullSession } from 'vtex.session-client'
import { useQuery } from 'react-apollo'
import QUERY_CLIENT_WALLET from './graphql/getWallet.gql'


const showBalance = () =>  {
  
  
  const [sessionUserId, setSessionUserId] = useState();
  
  const {  loading ,data  : dataSession, error} = useFullSession({
    variables: {
      items: ['profile.id.value']
    },
    onCompleted: () => {
      setSessionUserId(dataSession.session.id);      
      
      
    },
  })
  
  if (loading) {
    return 'Loading…'
  }
  if (error) {
    return `Error ${error}`
  }

    useEffect(() => {
      
      const { data : wallet} = useQuery(QUERY_CLIENT_WALLET,{ variables: { iduser:  sessionUserId }})
      const [walletBalance,setWalletBalance] = useState()
      setWalletBalance(wallet)      
      console.log('walletBalance',walletBalance)
      
    })
  
  
  //useEffect(function getWallet() {
  
  //const { data }  =


 //});




  
    //const [sessionData, setsessionData] = useState(data);
    //console.log('sessionData',sessionData)
    //setsessionData(sessionData);


  return <>0</>

}

export default showBalance

/*
  if (loading) {
    return <>Session is loading</>
  }

  if (error) {
    return <>Session has errors</>
  } */
  //console.log(sessionData)


/*   return sessionData


 try {

  console.log('FC',showBalance().session)
  const {data : qryresult} = useQuery(queryClientWallet,{ variables: { iduser: showBalance().session.id }})
  //console.log('showbalance',qryresult)
} catch (e){console.log(e)}



return <>0</> */


/* const GetSessionData: FC = () => {
} */



/*   const testWallet = {
    "data": {
      "queryClientWallet": [
        {
          "id": "bedf7a89-0716-11ed-835d-0e41ba39b31f",
          "userId": "01864ade-2de1-4916-adf2-32ada24e9fc4",
          "balance": "39"
        }
      ]
    }
  } */
