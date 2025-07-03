import avatar1 from "../../assets/Testimonial/Frame 1618873132.png"
import avatar2 from "../../assets/Testimonial/Frame 1618873132 (1).png"
import avatar3 from "../../assets/Testimonial/Frame 1618873132 (2).png"

const testimonials = [
  {
    name: 'Wehwish',
    avatar: avatar1,
    text: 'This platform has genuinely saved me countless hours every week! The AI captions are an absolute game-changer for my small business.',
    color: 'border-l-4 border-purple-400',
  },
  {
    name: 'Wade Warren',
    avatar: avatar2,
    text: 'Finally, an easy and effective way to manage my Instagram content. The automation is flawless, and I highly recommend it to any content creator!',
    color: 'border-l-4 border-cyan-400',
  },
  {
    name: 'Guy Hawkins',
    avatar: avatar3,
    text: 'This platform has genuinely saved me countless hours every week! The AI captions are an absolute game-changer for my small business.',
    color: 'border-l-4 border-pink-300',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#4CE0FA0A] rounded-2xl shadow-sm p-8 md:p-16 max-w-[1620px] mx-auto px-3 md:px-5 border border-gray-200 relative flex flex-col lg:flex-row justify-center items-center">
      <div className="mb-8 w-full lg:w-1/2 ">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          What <span className="text-purple-600">Our Early Users</span> <span className="text-cyan-400">Are</span> <span className="text-purple-600">Saying</span>
        </h1>
        <p className="text-gray-400 max-w-xl py-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2">
        {testimonials.map((review, idx) => (
          <div key={idx} className={`flex-1 bg-white rounded-xl shadow-sm p-6 flex flex-col gap-2 ${review.color} relative ${idx % 2 === 0 ? 'lg:ml-0 ' : 'lg:-ml-12'}`}>
            <div className="flex items-center gap-3 mb-2">
              <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full border-2 border-white shadow" />
              <span className="font-semibold text-gray-800">{review.name}</span>
            </div>
            <p className="text-gray-600 text-sm">"{review.text}"</p>
            <span className="absolute right-4 top-4 text-2xl text-purple-200">❝❞</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;