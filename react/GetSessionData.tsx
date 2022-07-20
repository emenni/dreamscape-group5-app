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

  { userId: sessionData?.session.namespaces.profile.id.value }
  const { data } = useQuery(hardcodedwallet)
  let balance = data?.queryClientWallet[0].balance
  
  return <> {`${balance}`} </>
}

export default GetSessionData