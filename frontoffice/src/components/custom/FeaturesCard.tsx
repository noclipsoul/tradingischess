import { StrapiImage } from "@/components/custom/StrapiImage";
interface StrapiImage {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  onClick?: (() => void) | null; 
}

interface featcard  {
  id: number;
  heading: string;
  subHeading: string;
  imagesfeature: {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
  };
}

interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

interface FeaturesCardProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subheading: string;
  featurescard : featcard [];
 
}

export function FeatureCard({ data }: { readonly data: FeaturesCardProps }) {
  const {   featurescard   , heading ,subheading} = data;

  return (
    <header className=" relative flex-auto  bg-gray-900 text-white " >
    

     
      <div className="relative  mx-auto max-w-full  py-16 sm:px-6 lg:px-8">
      <div className="object-center mb-32">
        <h2 className="mt-2 text-4xl text-center font-bold"> {heading}</h2>
        <h4 className="mt-2 text-xl text-center font-semibold">{subheading}</h4>
        </div>
       
      
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 px-[10%]  ">
          {featurescard .map((feature, index) => (
            
            
              <div key={feature.id} className="  border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">      
                
            <div className="p-5">
                         
                    <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{feature.heading}</h5>
               
                <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400">{feature.subHeading}</p>
                
            </div> 
            <div className="flex items-center mt-10 justify-end mr-5  mb-5 ">
                  <StrapiImage   src={feature.imagesfeature.url?? ""} alt={feature.imagesfeature.alternativeText ?? ""} width={500} height={500} />
            </div>
          </div>
          ))}
        </div>
      </div>
      
      



    </header>
  );
}