
import icon1 from "../../assets/HowItWorks/Vector.png"
import icon2 from "../../assets/HowItWorks/Vector (1).png"
import icon3 from "../../assets/HowItWorks/Vector (2).png"
import icon4 from "../../assets/HowItWorks/Vector (3).png"
import Section from "../Shared/Section"
import SectionTitle from "../Shared/SectionTitle"
const HowItWorks = () => {
    const data=[
        {
            id:1,
            icon:icon1,
            background:"#8A36EA1A",
            title:"Create Your Content    ",
            description:"Upload your photo or post directly to our intuitive web app."
        },
        {
            id:2,
            icon:icon2,
            background:"#3D58EA33",
            title:"AI-Powered Magic",
            description:"Our system, powered by advanced AI, automatically crafts a catchy caption and relevant hashtags for your post."
        },
        {
            id:3,
            icon:icon3,
            background:"#8A36EA33",
            title:"Publish with One Click",
            description:"Review, then instantly publish your content to Instagram (and optionally Facebook) with a single click."
        },
        { 
            id:4,
            icon:icon4,
            background:"#1CBA9F33",
            title:"Track Your Histor",
            description:"Easily review your past posts and engagement within your personal dashboard."
        },
    ]
  return (
     <div className="pt-10">
        <Section>
          <SectionTitle>How It <span className="text-[#8A36EA] ">Works</span></SectionTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-20 gap-5">
            {
              data.map(item=>{
                return (
                  <div key={item.id} className="bg-white border border-slate-100 rounded-2xl  flex flex-col items-center p-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{background:item.background}}>
                      <img src={item.icon} alt={`icon-${item.id}`}/>
                    </div>
                    <h1 className="mt-6 text-xl font-bold">{item.title}</h1>
                    <p className="text-center mt-3 md:text-sm lg:text-base  leading-snug">{item.description}</p>                   
                  </div>
                )
              })
            }
          </div>
        </Section>
    </div>
  )
}

export default HowItWorks