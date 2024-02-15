'use client'
import Image from "next/image";
import { useState } from "react";
import { ProductType } from "@/types/ProductTypes"

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

export default function ProductImage({product, fill}: ProductImageProps){
    const [loding, setLoading] = useState(true)
    return fill ? (
        <Image
            src={product.image}
            fill
            alt={product.title}
            className={`object- cover ${loding? 'scale-110 blur-3x1 grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        />      
    ): (
        <Image
            src={product.image}
            width={400}
            height={700}
            alt={product.title}
            className={`object- cover ${loding? 'scale-110 blur-3x1 grayscale' : 'scale-100 blur-0 grayscale-0'}`}
    />  
    )
}