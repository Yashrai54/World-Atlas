import earth from '../UI/earth.png'
import { Link,Outlet } from 'react-router-dom'
export const Headers=()=>{
   return(
      <>
      <div className="nav">
         <h1>Atlas <img src={earth} width="20" height="20"></img></h1>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="country">Country</Link></li>
            <li><Link to="contact">Contact</Link></li>   
         </ul>
      </div>
      
      </>
   )
}