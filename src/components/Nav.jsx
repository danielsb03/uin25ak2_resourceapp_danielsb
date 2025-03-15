import { Link, useParams } from "react-router-dom";
import { resources  } from "../assets/ressurser";


export default function Nav (){
    const categories = [
        {
          id: 1,
          name: "Html",
          slug: "html"
        },
        {
          id: 2,
          name: "Css",
          slug: "css"
        },
        {
          id: 3,
          name: "Javascript",
          slug: "javascript"
        },
        {
          id: 4,
          name: "React",
          slug: "react"
        },
        {
          id: 5,
          name: "Sanity",
          slug: "sanity"
        },
      ];
     return ( 
     <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              {/* Konstruert category-path via Link-komponent for å støtte React Router*/}
              <Link to={`/category/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );

}