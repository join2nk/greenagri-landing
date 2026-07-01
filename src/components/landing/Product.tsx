import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Boiled IR",
    image: "/images/product-1.png", // Replace with actual image path
    link: "/products/organic-rice", // Product page link
  },
  {
    id: 2,
    name: "Boiled Swarna Rice",
    image: "/images/product-2.png",
    link: "/products/fresh-vegetables",
  },
  {
    id: 3,
    name: "White Broken Rice",
    image: "images/product-3.png",
    link: "/products/premium-wheat",
  },
  {
    id: 4,
    name: "White Rice",
    image: "images/product-4.png",
    link: "/products/dairy-products",
  },
  
];
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export function Products() {
  return (
    <div className="space-y-8 py-8">
      <h2
        className="text-gray-800 text-center text-2xl md:text-3xl lg:text-5xl p-8 font-semibold leading-tight"
        data-aos="fade-up"
      >
        A Range of Our Rice Varieties
      </h2>

      <Carousel
        className="max-w-5xl mx-auto items-center justify-center px-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="basis-64">
              {/* <div className="p-2"> */}

              <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl group transition-all duration-500 border border-emerald-100/40 hover:border-emerald-200/60">
                {/* Product Image */}
                <div className="relative w-full h-52 overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 mt-3 group-hover:text-emerald-700 transition-colors duration-300">
                    {product.name}
                  </CardTitle>
                  <CardDescription>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                {/* Product Name */}
                <CardContent></CardContent>
                <CardFooter>
                  {/* "Know More" Button */}
                  <a
                    href={product.link}
                    // className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md text-sm flex items-center gap-2 transition-all hover:bg-green-700"
                  >
                    Know More →
                  </a>
                </CardFooter>
              </Card>
              {/* </div> */}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

     
      <div className="mx-auto w-full flex justify-center">  

        <a
          href="/product"
           data-aos="fade-up" data-aos-delay="200"
          >
         <Button
         
        >
          Explore More
         </Button> 
        </a>
      </div>
    </div>
  );
}
