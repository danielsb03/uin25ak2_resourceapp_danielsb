
import "../styles/PageTitle.scss";


export default function PageTitle ({resource}){
  console.log("hei",resource)
  return (
  
  <>
  <ul>
    <li> <a href={resource.url}>{resource.title}</a></li>
   </ul>
  </>
);
}