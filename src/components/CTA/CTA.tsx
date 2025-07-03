import leftGridImg from "../../assets/Banner/Component 1.png"
import rightGridImg from "../../assets/Banner/Component 2.png"
import bannerImg from "../../assets/Banner/banner.png"


const CTA = () => {
  return (
    <div>
        <div className="relative md:h-[400px]">
            <div>
                <img src={leftGridImg} alt="left grid image" className="absolute left-0 top-0 -z-10 hidden md:block"/>
            </div>
            <div>
                <img src={rightGridImg} alt="right grid image" className="absolute right-0 top-0 -z-10 hidden md:block"/>
            </div>
            <div className="text-center max-w-6xl mx-auto z-10 mt-12 bg-white xl:bg-transparent">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug  px-5">
                    Ready to <span className="text-[#8A36EA]">Transform Your</span> <br /> <span className="text-[#8A36EA]">Social</span> Media? 
                </h1>
                <div className="text">

                </div>
                <p className="text-[#6B7280] text-xs sm:text-base lg:text-lg leading-snug mt-6 px-10">Join businesses automating their content and growing their reach effortlessly. Sign up today  <br /> and experience the difference!</p>

                <button className="bg-gradient-to-r from-[#8A36EA] via-[#22499C] to-[#3D58EA] px-4 py-2 md:px-8 md:py-4 rounded-full text-white mt-5 sm:mt-10">Get Start Now</button>
            </div>
        </div>
    </div>
  )
}

export default CTA;