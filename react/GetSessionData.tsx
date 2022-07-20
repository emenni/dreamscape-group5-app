import React from 'react'
import { useFullSession } from 'vtex.session-client'
import { useQuery } from 'react-apollo'
import hardcodedwallet from './graphql/hardcodedwallet.gql'

function GetSessionData() {
  const { loading, data : sessionData, error } = useFullSession()

  if (loading) {
    return <>Session is loading</>
  }

  if (error) {
    return <>Session has errors</>
  }

   let userId =  sessionData?.session.namespaces.profile.id.value 
   console.log(userId)
  
  const { data } = useQuery(hardcodedwallet)
  let balance = data?.queryClientWallet[0].balance
  
  console.log(userId)
  console.log(balance)

  return <> 'TESTE' </>
}

export default GetSessionData