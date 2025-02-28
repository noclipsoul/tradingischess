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
  header: string;
  subheading: string;
  features: Features[];
 
}

export function FeatureSection({ data }: { readonly data: FeaturesSectionProps }) {
  const {   features,header ,subheading } = data;

  return (
    <header className=" flex flex-auto bg-black p-7 " >
    

     
      <div className="">
       
        <div className="object-center text-white mb-7">
        <h2 className="mt-2 text-4xl  text-center font-bold"> {header}</h2>
        <h4 className="mt-2 text-xl text-center font-semibold">{subheading}</h4>
        </div>
      
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 px-[10%]  ">
          {features.map((feature, index) => (
            
              <div key={feature.id} className="  m-6 bg-white rounded-[12%] shadow dark:bg-gray-800 dark:border-gray-700 ">      
                
            <div className="p-5">
                         <a className="px-2 py-1 rounded text-sm  bg-green-500"> {index+1}</a>
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