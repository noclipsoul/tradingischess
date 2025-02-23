import { StrapiImage } from "@/components/custom/StrapiImage";


interface Features {
  id: number;
  heading: string;
  subHeading: string;
  
}



interface FeaturesSectionProps {
  id: number;
  documentId: string;
  __component: string;
  title: string;
  description: string;
  features: Features[];
 
}

export function FeatureSection({ data }: { readonly data: FeaturesSectionProps }) {
  const {   features } = data;

  return (
    <header className=" relative flex-auto  " >
    

     
      <div className="relative  mx-auto max-w-full  py-16 sm:px-6 lg:px-8">
       
        <div className="object-center mb-7">
        <h2 className="mt-2 px-[10%] text-4xl text-left font-bold text-black">Getting started is so easy</h2>
        </div>
      
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 px-[10%]  ">
          {features.map((feature, index) => (
            
              <div key={feature.id} className="  border bg-blue-50 border-gray-200 rounded-[12%] shadow dark:bg-gray-800 dark:border-gray-700 ">      
                
            <div className="p-5">
                         <a className="px-2 py-1 rounded text-sm  bg-green-500">Step {index+1}</a>
                    <h5 className="mb-2 mt-3 text-base font-bold tracking-tight text-gray-900 dark:text-white">{feature.heading}</h5>
               
                <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400">{feature.subHeading}</p>
                
            </div> 
            
          </div>
          ))}
        </div>
      </div>
      
      



    </header>
  );
}