import { UNSAFE_getSingleFetchDataStrategy, useParams } from "react-router-dom"
import PageTitle from "./PageTitle"
import { useEffect, useState } from "react";



export default function Resources ({resources, resource}){
    const {slug} = useParams()

    
    console.log("Dette er params", useParams)
    //Filtrerer products-arrayen basert på slug:
     const categoryProducts = resources.filter((resource) => resource.category === slug)
     console.log("resources", resources.category)
    console.log("Hei", categoryProducts)
    
    return (
           
        <main>
     
    <div id="productlist">
            {/* Mapper gjennom den filtrerte produktlisten og genererer et ProductCard-komponent for hvert produkt */}
            {categoryProducts.map((resource, index) => (
                <PageTitle 
                resource={resource}
                key={index}
                
                />
            ))}
            </div>
       
    </main>
    )
}