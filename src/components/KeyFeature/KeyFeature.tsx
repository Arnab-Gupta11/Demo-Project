
import icon1 from "../../assets/KeyFeatures/Simplification.png"
import icon2 from "../../assets/KeyFeatures/Simplification (1).png"
import icon3 from "../../assets/KeyFeatures/Simplification (2).png"
import icon4 from "../../assets/KeyFeatures/Simplification (3).png"
import SectionTitle from "../Shared/SectionTitle"
const KeyFeature = () => {                 
    const data=[
        {
            id:1,
            icon:icon1,
            titleColor:"#8A36EA",
            title:"Automated Caption & Hashtag Generation",
            description:"Leverage the power of AI to instantly generate engaging captions and highly relevant hashtags tailored to your content, saving you hours of brainstorming and research."
        },
        {
            id:2,
            icon:icon2,
            titleColor:"#2563EB",
            title:"Seamless Instagram (and Facebook) Integration",
            description:"Post directly to your Instagram Business Account (and Facebook Page) with full automation via Meta API, ensuring your content reaches your audience without manual effort.    "                                   
        },
        {
            id:3,
            icon:icon3,
            titleColor:"#2563EB",
            title:"Simple, Intuitive Web Interface",
            description:"Review, then instantly publish your content to Instagram (and optionally Facebook) with a single click."
        },
        { 
            id:4,
            icon:icon4,
            titleColor:"#8A36EA", 
            title:"Scalable & Future-Ready Backend",
            description:"Built on a robust, scalable backend structure, our platform is designed for future expansion, ready to integrate with more social channels as your needs grow."
        },
    ]
  return (
     <>
        <div className="max-w-6xl mx-3 md:mx-auto px-3  bg-white border border-slate-100 rounded-2xl md:px-16">
          <SectionTitle>Key <span className="text-[#8A36EA] ">Features</span> You'll Love</SectionTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-20 gap-5">
            {
              data.map(item=>{
                return (
                  <div key={item.id} className="flex flex-col p-5">
                    <div className="w-12 h-12 ">
                      <img src={item.icon} alt={`icon-${item.id}`}/>
                    </div>
                    <h1 className="mt-6 text-lg font-bold"  style={{color:item.titleColor}}>{item.title}</h1>
                    <p className=" mt-3 md:text-sm text-[#888888] lg:text-base  leading-snug">{item.description}</p>                   
                  </div>
                )
              })
            }
          </div>
        </div>
    </>
  )
}

export default KeyFeature