import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import helloworld from './graphql/helloworld.gql'

const DreamscapeGroup5Admin: FC = () => {
   const { data } = useQuery(helloworld)
  return (
    <Layout>
      <PageBlock title="Titulo" subtitle="Alguma explicação." variation="full">
        <h1>Hello, World!</h1>
       <p>{data?.queryClientWallet[0].balance}</p>
      </PageBlock>
    </Layout>
  )
}

export default DreamscapeGroup5Admin