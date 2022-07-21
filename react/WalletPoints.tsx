
import { useCssHandles } from 'vtex.css-handles'
import React, { useState, useEffect } from "react";


const Wallet: StorefrontFunctionComponent = () => {
  const CSS_HANDLES = ['pts', 'imgpts', 'ptsapi','imgcoins', 'geral']
const handles = useCssHandles(CSS_HANDLES)
const [sessionData, setSessionData] = useState()
  const [valuePoints, setValuePoints] = useState();
  useEffect(()  => {
    fetch('/api/sessions?items=*')
    .then((res) => res.json())
    .then((res)=> setSessionData(res.namespaces.profile.id.value)
    );
    console.log(sessionData)
});
  
  useEffect(() => {
      fetch(`/_v/app/clientWallet`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "VtexIdclientAutCookie":"eyJhbGciOiJFUzI1NiIsImtpZCI6Ijk4MUMzOTI1QjAzNkFGNjc2QjgxMzMzQzhBQkFFOThCODFERTY5OTgiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJwaGVsaXBlb3BoQG1zbi5jb20iLCJhY2NvdW50IjoiZHJlYW1zY2FwZSIsImF1ZGllbmNlIjoiYWRtaW4iLCJzZXNzIjoiYWJlNDc4OTAtZjM2Zi00MzM3LTllYWItNjgyYzYzMGE0MDEzIiwiZXhwIjoxNjU4MzYwOTI0LCJ1c2VySWQiOiJlNDdkNTFjNy0wZGQwLTQ3NzAtYmQzNC1mZDQ5ZGE3ZmJmYzgiLCJpYXQiOjE2NTgyNzQ1MjQsImlzcyI6InRva2VuLWVtaXR0ZXIiLCJqdGkiOiI0NDM2ZWJlZi1mYTU2LTQyZTQtOTRjNy0yNTZmNTMwNWUzMzkifQ.A1j2WQjrV8clI5_epxdzeZKWXaGNIIP-KeK1lDuFAQsmgiFn9Yp1HyPJxDstPzVg4jV-z0EMr4qvJd-B1tkQQQ"
        },
        body: JSON.stringify({
  
            userId: sessionData
  
        })
      })
        .then((res) => res.json())
        .then((res)=> setValuePoints(res[0].balance)
        );
    });


  return (
    <>
    <h3 className={`${handles.geral}`}>  DreamCoins </h3>
    <div > 
  
    <table className={`${handles.pts}`}> 

    <tr>
      <td><img className={`${handles.imgpts}`} src='https://img.icons8.com/clouds/344/treasure-chest.png'/>
      </td>	
      <td className={`${handles.alinhar}`}>
      <img className={`${handles.imgcoins}`} src='https://img.icons8.com/emoji/2x/coin-emoji.png'/>
        <span className={`${handles.ptsapi}`}>{`${valuePoints}`}</span>
        </td>
      
    </tr>
    </table>
    </div>
    </>

  )

  }

export default Wallet
