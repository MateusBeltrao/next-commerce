import Image from "next/image";
import Product from "./components/Product";

import { ProductType } from "@/types/ProductTypes";

async function getProducts() {
  const res = await fetch ('https://fakestoreapi.com/products')


  if(!res.ok){
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {

  const products = await getProducts()


  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        
          {products.map((products: ProductType) => (
            <Product key={products.id} product={products}></Product>
          ))}
       

      </div>
    </div>
  );
}
