import { TiTick } from "react-icons/ti"
import SectionTitle from "../Shared/SectionTitle"
import { RxCross2 } from "react-icons/rx"

const SimplePricing = () => {
  return (
    <div className="px-3 md:px-0">
        <SectionTitle>Simple and transparent <span className="text-[#8A36EA]">pricing</span></SectionTitle>
        <p className="text-center text-[#909090] text-sm md:text-base">Choose a plan that fits your business needs and budget. No hidden fees, <br /> 
        no surprises—just straightforward pricing.</p>
        <div className="flex items-center justify-center ">
        <div className="bg-[#F5F6F9] border border-[#D8D8DB] w-64 h-16 rounded-full mt-8 mb-14 flex items-center justify-between p-2">
          <button className="w-1/2 h-full bg-[#7050F0] rounded-full text-white">
            Monthly
          </button>
          <button className="w-1/2 h-full rounded-full text-[#909090]">
            Yearly
          </button>     
        </div>
        </div>
        <div className="max-w-6xl mx-3 md:mx-auto px-3   md:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 mb-20 gap-5">

              <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm shadow-[#00000040]">
                <span className="text-[#8267EC]">Free</span>
                <h1><span className="text-2xl font-bold">$O</span>/Month</h1>
                <p className="text-lg mt-4">Perfect for getting start and trying out basic features</p>
                <div className="mt-3 flex flex-col gap-3">

                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">5 Posts/month</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">AI Caption & Hashtag Generation</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">Instagram Integration</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <RxCross2 className="w-5 h-5 shrink-0 text-red-500"/>
                    <span className="text-[#616161]">Post History (Limited)</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <RxCross2 className="w-5 h-5 shrink-0 text-red-500" />
                    <span className="text-[#616161]">Facebook Integration</span>
                  </div>

                </div>

                <button className="rounded-full w-full py-2 border border-[#A1A1A1] mt-5 text-[#8267EC]">
                  Get started fee
                </button>
              </div>
              <div className="p-5 bg-white border-2 border-[#8267EC] rounded-2xl shadow-sm shadow-[#00000040]">
                <span className="text-[#8267EC]">Free</span>
                <h1><span className="text-2xl font-bold">$29 </span>/Month</h1>
                <p className="text-lg mt-4">Ideal for growing businesses and active content creators.</p>
                <div className="mt-3 flex flex-col gap-3">

                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">Unlimited Posts</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">Advanced AI Features</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">Instagram & Facebook Integration</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">Full Post History</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500" />
                    <span className="text-[#616161]">Priority Support</span>
                  </div>

                </div>

                <button className="rounded-full w-full py-2 border border-[#A1A1A1] mt-5 text-white bg-gradient-to-r from-[#8A36EA] via-[#22499C] to-[#3D58EA]">
                  Choose Pro
                </button>
              </div>
              <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm shadow-[#00000040]" >
                <span className="text-[#8267EC]">Free</span>
                <h1><span className="text-2xl font-bold">$99</span>/Month</h1>
                <p className="text-lg mt-4">For agencies and large teams requiring extensive automation.</p>
                <div className="mt-3 flex flex-col gap-3">

                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">All Pro Features</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">Multi-user Access</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">Dedicated Account Manager</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">Custom Integrations (API Access)</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <TiTick className="w-5 h-5 shrink-0 text-green-500"/>
                    <span className="text-[#616161]">Enhanced Analytics</span>
                  </div>

                </div>

                <button className="rounded-full w-full py-2 border border-[#A1A1A1] mt-5 text-[#8267EC]">
                  Get started fee
                </button>
              </div>
           
          </div>
        </div>


    </div>
  )
}

export default SimplePricing