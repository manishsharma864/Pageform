import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page() {
  return(
    <div className="grid grid-cols-2 gap-4 fixed">
      <div className="w-full h-full px-3 items-center justify-center">
       <h1 className="pt-4 pb-4 font-bold text-6xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer">Welcome to CustomForms!
       
       </h1> 
       <h2 className="pt-4 pb-4 font-bold text-3xl">A single source for all custom forms is lifetime-free.</h2>
       <br/>
       <Link  href={"/sign-up"}>
        <Button className="font-bold  ">
          Get Started For Free <ArrowRightIcon />
        </Button>
       </Link>
      </div>
      <div className="w-full h-full">
      <SignIn />
      </div>
   
    </div>
   )
  ;
}
