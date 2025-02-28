"use client"; 

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react"; 
import { Button } from "@/components/ui/button"; 
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; 

export default function ProductsClient({ products }: { products: any[] }) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null); 
  const [isDialogOpen, setIsDialogOpen] = useState(false); 


  const expertAdvisors = products.filter(
    (product: any) => product.type === "ExpertAdvisor"
  );
  const indicators = products.filter(
    (product: any) => product.type === "Indicators"
  );
  const services = products.filter(
    (product: any) => product.type === "Services"
  );


  const handleAddToCart = (product: any) => {
    setSelectedProduct(product); 
    setIsDialogOpen(true);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-12">
        <p className="text-xs text-teal-500 mb-2">Products</p>
        <h1 className="text-2xl font-bold mb-3">MQL5 Programs Market</h1>
        <p className="text-gray-600 max-w-3xl">
          Dozens of new automated trading applications appear in the MQL5 Market every day. Choose the right app among
          10,000 products and forget about unnecessary routine operations of manual trading.
        </p>
      </div>


      <section className="mb-16">
        <h2 className="text-lg font-semibold mb-6">Featured products</h2>
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x">
            {products.slice(0, 4).map((product: any) => (
              <div
                key={product.id}
                className="min-w-[300px] sm:min-w-[320px] border border-gray-200 rounded-lg overflow-hidden flex-shrink-0 snap-start bg-white"
              >
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-amber-400 text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-600 mb-4">
                    {product.Description[0]?.children[0]?.text || "No description available."}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">$ {product.price}</span>
                    <Button
                      onClick={() => handleAddToCart(product)} 
                      className="bg-teal-500 text-white text-xs py-1.5 px-3 rounded flex items-center gap-1"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path
                          d="M3 6H21M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Add to cart
                    </Button>
                  </div>
                </div>
                <div className="h-32 bg-black relative">
                  <Image
                    src="/logo.png"
                    alt={product.name}
                    width={320}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1 mt-2">
            {[1, 2, 3, 4].map((dot) => (
              <span
                key={dot}
               
              />
            ))}
          </div>
        </div>
      </section>


      <section className="mb-16">
        <h2 className="text-lg font-semibold mb-6">All our products</h2>
        <div className="flex gap-4 border-b mb-6">
          <button className="text-sm pb-2 border-b-2 border-teal-500 font-medium">Recently added</button>
          <button className="text-sm pb-2 text-gray-500">Bestsellers</button>
          <button className="text-sm pb-2 text-gray-500">Upcoming products</button>
        </div>
        <ProductGrid products={expertAdvisors} category="Expert Advisor" onAddToCart={handleAddToCart} />
      </section>

      <section className="mb-16">
        <ProductGrid products={indicators} category="Indicators" onAddToCart={handleAddToCart} />
      </section>

      <section className="mb-16">
        <ProductGrid products={services} category="Services" onAddToCart={handleAddToCart} />
      </section>

    
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to Cart</DialogTitle>
          </DialogHeader>
          <div>
            <p className="text-sm text-gray-600">
              fill the form to add to Cart: <strong>{selectedProduct?.form?.title}</strong>
            </p>
       
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

function ProductGrid({ products, category, onAddToCart }: { products: any[]; category: string; onAddToCart: (product: any) => void }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-teal-500 text-sm font-medium">{category}</h3>
        <Link href="#" className="text-sm flex items-center gap-1 hover:text-teal-600">
          See all <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {products.map((product: any) => (
          <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <div className="p-3">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-amber-400 text-xs">
                    ★
                  </span>
                ))}
              </div>
              <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
            </div>
            <div className="h-32 bg-black relative">
              <Image
                src="/logo.png"
                alt={product.name}
                width={320}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 flex justify-between items-center">
              <span className="font-semibold">$ {product.price}</span>
              <Button
                onClick={() => onAddToCart(product)} 
                className="bg-teal-500 text-white text-xs py-1.5 px-3 rounded flex items-center gap-1"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M3 6H21M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add to cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1 mt-2">
        {[1, 2, 3, 4].map((dot) => (
          <span
            key={dot}
           
          />
        ))}
      </div>
    </div>
  );
}