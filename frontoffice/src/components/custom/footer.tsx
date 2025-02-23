import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface SocialLink {
  id: number;
  text: string;
  url: string;
}

interface FooterProps {
  data: {
    logoText: {
      id: number,
      text: string,
      url: string,
    },
    text: string,
    socialLink: SocialLink[],
  };
}

export function Footer({ data }: Readonly<FooterProps>) {
  const {  socialLink, text } = data;
  return (
    <div className="h-52 text-white mt-40">
      
     <div className="h-[30%] bg-[linear-gradient(to_top,#000,transparent)]"></div>
     

    <div className="h-[70%] bg-black flex px-[10%] flex-col md:flex-row items-center justify-between">
      <p className="text-sm text-gray-300">{text}</p>
      <div className="flex items-center space-x-4"></div>
    </div>
    <div className="justify-center px-[25%] -mt-80">
      <Card className="bg-green-800 text-c">
  <CardHeader>
    <CardTitle className="text-white">Master the Game of Trading</CardTitle>
    <CardDescription className="text-white">Card Description</CardDescription>
  </CardHeader>
 
  <CardFooter>
   <form>
    <input type="email" className="rounded"></input>
    <button className="ml-4 p-2  bg-orange-400 rounded-[15%]">subscribe</button>
   </form>
  </CardFooter>
</Card>
</div>
  </div>
  
  );
}
