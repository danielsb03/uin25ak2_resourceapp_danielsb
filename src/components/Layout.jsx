import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Resources from "./Resources";
import PageTitle from "./PageTitle";


export default function Layout ({children}){
  const {slug} = useParams ()
    return (
      <div className="info">
        
         <Nav />  
          {children}
           </div>
           
        )
}
            