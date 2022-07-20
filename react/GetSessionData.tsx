import React, { FC } from 'react'
import { useFullSession } from 'vtex.session-client'
import { useQuery } from 'react-apollo'
import queryClientWallet from './graphql/getWallet.gql'


const GetSessionData: FC = () => {
  const { loading, data: sessionData, error } = useFullSession()

  if (loading) {
    return <>Session is loading</>
  }

  if (error) {
    return <>Session has errors</>
  }

  const handleToggle = () => {
   return  useQuery(queryClientWallet);
  }

  try { console.log(handleToggle()) } catch (e) {
    console.log(e)
  }
  let userId = sessionData?.session.namespaces.profile.id.value



  //const { data: walletdata } =  useQuery(queryClientWallet)
  //let balance = walletdata?.queryClientWallet[0].balance
  //let balance = 25

  console.log(userId)
  //console.log(walletdata)
  //console.log(balance)

  //console.log(useQuery(hardcodedwallet))


  //return <>${balance}</>
  return <>Ready</>
}


export default GetSessionData