import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [open,setOpen]=useState(false);
    const navItem=[
        {
            path:"/features",
            label:"Features"
        },
        {
            path:"how-it-works",
            label:"How It Works"
        },
        {
            path:"integrations",
            label:"Integrations"
        },
        {
            path:"pricing",
            label:"Pricing"
        },
        {
            path:"support",
            label:"Support"
        },
    ]
  return (
    <div className="max-w-[1620px] mx-auto px-3 md:px-5">

    <div className="flex items-center justify-between border border-[#EAEAEA] rounded-full px-4 py-3 md:py-4 mt-8">
        {/* Logo  */}
        <div>
            <h1 className="font-bold text-lg">Logo</h1>
        </div>
        
        {/* Nav-Menu  */}
        <div className="hidden lg:flex items-center gap-6 ">
            {
                navItem.map(item=>{
                    return (
                        <span className="text-lg" key={item.label}>
                            {
                                item.label
                            }
                        </span>
                    )
                })
            }
        </div>

        {/* Action - Button  */}
        <div className="flex items-center gap-3 ">
            <button className="hidden lg:block bg-gradient-to-r from-[#8A36EA] via-[#22499C] to-[#3D58EA] px-4 py-2 md:px-8 md:py-4 rounded-full text-white">Get Started</button>

        <div>
            <div className="relative inline-block text-left">
  <div>
    <button onClick={()=>{setOpen(!open)}} type="button" className="lg:hidden inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
        {
            open ? <RxCross2  className="text-xl"/> : <IoMenuOutline className="text-xl"/>
        }
      
    </button>
  </div>

  <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden ${open ? "block" : "hidden"}`} >
    <div className="flex flex-col p-5 gap-3" role="none">
      {
                navItem.map(item=>{
                    return (
                        <span className="text-base" key={item.label}>
                            {
                                item.label
                            }
                        </span>
                    )
                })

                
            }
            <button className="bg-gradient-to-r from-[#8A36EA] via-[#22499C] to-[#3D58EA] px-4 py-2 md:px-8 md:py-4 rounded-full text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
        </div>

        


    </div>
    </div>
    



  )
}

export default Header