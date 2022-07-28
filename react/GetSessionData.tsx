import React from 'react'
import { usePointsBalance } from './components/hooks/usePointsBalance'

const PointsBalanceBlock= () => {
 
  const { data: walletBalance, isLoading,  hasError } = usePointsBalance()
 
  if (isLoading) return <>Loading...</>
  
  return hasError ? console.log("ocorreu um erro") : (
    <>{walletBalance} </>
 )
  
}


export default PointsBalanceBlock




