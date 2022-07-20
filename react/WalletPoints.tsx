import * as React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['wallet']

const Wallet: StorefrontFunctionComponent<{}> = ({}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const points = 15
  return (
    <div className={`${handles.wallet}`}>
      <h3 className={`${handles.points}`}> DreamPoints: {points} </h3>
    </div>
  )
}

Wallet.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default Wallet