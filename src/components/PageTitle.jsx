
import "../styles/PageTitle.scss";


export default function PageTitle ({resource}){
  console.log("hei", resource)
  return (
   
  <article className="info">
    <h1>{resource.category}</h1>
    <a href={resource.url}>{resource.title}</a>
  </article>
);
}