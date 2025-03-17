import { useParams } from "react-router-dom";
import Nav from "./Nav";



export default function Layout ({children}){
    return (
      <div className="info">
        
         <Nav />  
          {children}
           </div>
           
        )
}
            