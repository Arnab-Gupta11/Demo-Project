
import icon1 from "../../assets/WhoIsThisPlatform/Background+Border.png"
import icon2 from "../../assets/WhoIsThisPlatform/Background+Border (1).png"
import icon3 from "../../assets/WhoIsThisPlatform/Background+Border (2).png"
import image1 from "../../assets/WhoIsThisPlatform/Frame 1618872987.png"
import image2 from "../../assets/WhoIsThisPlatform/Frame 1618872987 (1).png"
import image3 from "../../assets/WhoIsThisPlatform/Frame 1618872987 (2).png"
import SectionTitle from "../Shared/SectionTitle"
import Section from "../Shared/Section"
const WhoIsThisPlatform = () => {                 
    const data=[
        {
            id:1,
            icon:icon1,
            image:image1,
            title:"Business Owners",
            description:"Looking to streamline their social media presence and grow their brand online with minimal effort."
        },
        {
            id:2,
            icon:icon2,
            image:image2,
            title:"Content Creators",
            description:"Seeking to boost engagement and consistency with AI-powered captions and automated publishing."                                   
        },
        {
            id:3,
            icon:icon3,
            image:image3,
            title:"Time-Strapped Professionals",
            description:"Anyone who wants to save valuable time on social media management and focus on their core business."
        }, 
    ]
  return (
     <>
        <Section>
          <SectionTitle>Who Is This <span className="text-[#8A36EA] ">Platform</span> For?</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 gap-5">
            {
              data.map(item=>{
                return (
                  <div key={item.id} className="rounded-2xl border border-slate-100 p-5">
                    <img src={item.icon} alt={`icon-${item.id}`} className="w-12 h-12 mb-4"/>
                    <div className="w-full h-52 ">
                      <img src={item.image} alt={`image-${item.id}`} className="w-full h-full object-fill"/>
                    </div>
                    <h1 className="mt-6 text-lg font-bold">{item.title}</h1>
                    <p className=" mt-3 md:text-sm text-[#888888] lg:text-base  leading-snug">{item.description}</p>                   
                  </div>
                )
              })
            } 
          </div>
        </Section>
    </>
  )
}

export default WhoIsThisPlatform