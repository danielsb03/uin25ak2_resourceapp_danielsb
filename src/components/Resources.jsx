import { UNSAFE_getSingleFetchDataStrategy, useParams } from "react-router-dom"
import PageTitle from "./PageTitle"
import { useEffect, useState } from "react";



export default function Resources ({resources, resource}){
    const {slug} = useParams()

    
    console.log("Dette er params", useParams)
    //Filtrerer products-arrayen basert på slug:
     const categoryProducts = resources.filter((resource, ) => resource.category === slug)
     console.log("resources", resources.category)
    console.log("Hei", categoryProducts)
    
    return (
           
        <main>
     
    <div id="productlist">
           
            <article className="info"> 
         {/*Fikk hjelp av Ingrid*/}
               <h1>{categoryProducts[0].category}</h1>
                

            <ul>
            {categoryProducts.map((resource, index) => (
                <PageTitle 
               
                key={index}
                resource={resource}
                
                />
                
))}</ul>

                
            
            </article>
            </div>
       
    </main>
    )
}