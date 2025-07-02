import leftGridImg from "../../assets/Banner/Component 1.png"
import rightGridImg from "../../assets/Banner/Component 2.png"
import bannerImg from "../../assets/Banner/banner.png"


const Banner = () => {
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
                    Effortless <span className="text-[#8A36EA]">Social Media</span> Content, <br /> Powered by AI.
                </h1>
                <div className="text">

                </div>
                <p className="text-[#6B7280] text-xs sm:text-base lg:text-lg leading-snug mt-6 px-10">Generate captivating captions and hashtags with AI, then auto-publish to Instagram and <br /> Facebook. Save time, boost creativity, and grow your online presence.</p>

                <button className="bg-gradient-to-r from-[#8A36EA] via-[#22499C] to-[#3D58EA] px-4 py-2 md:px-8 md:py-4 rounded-full text-white mt-5 sm:mt-10">Get Started</button>
            </div>
        </div>
        <div className="max-w-6xl mx-auto px-3 md:px-5 mt-5 md:mt-0">

            <div>
                <img src={bannerImg} alt="banner" />
            </div>
        </div>
    </div>
  )
}

export default Banner