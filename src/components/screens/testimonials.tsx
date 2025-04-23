import { SectionBadge } from "../ui/section-badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Ratings } from "../../constants";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      header: "Marketing Manager.",
      text: "I love the instant transfer feature! It makes sending money to friends and family a breeze",
      name: "David Anderson",
      aurthurImg: "https://randomuser.me/api/portraits/men/38.jpg",
      date: "January 2",
    },
    {
      id: 2,
      header: "Financial Analyst",
      text: "This banking app has completely transformed how I manage my finances. It's user-friendly and efficient!",
      name: "Brian Ramirez",
      aurthurImg: "https://randomuser.me/api/portraits/men/22.jpg",
      date: "February 15",
    },
    {
      id: 3,
      header: "Graphic Designer",
      text: "The budgeting tools are fantastic. They’ve really helped me keep track of my spending!",
      name: "James Carter",
      aurthurImg: "https://randomuser.me/api/portraits/men/68.jpg",
      date: "March 10",
    },
    {
      id: 4,
      header: "Data Scientist",
      text: "I've never felt more secure about my online banking. The security features are top-notch!",
      name: "Stellar morris",
      aurthurImg: "https://randomuser.me/api/portraits/women/38.jpg",
      date: "April 5",
    },
    {
      id: 5,
      header: "UI/UX Designer",
      text: "Setting up my account was so quick and easy. I was amazed at how fast everything was!",
      name: "Emily Brandon",
      aurthurImg: "https://randomuser.me/api/portraits/women/88.jpg",
      date: "May 8",
    },
    {
      id: 6,
      header: "Bar Owner",
      text: "The customer support team is incredibly helpful and responsive. They always resolve my issues promptly.",
      name: "Robert Lewis",
      aurthurImg: "https://randomuser.me/api/portraits/men/15.jpg",
      date: "June 20",
    },
  ];
  return (
    <div className="pb-28 space-y-4">
      <div className="w-full  container-wrapper">
        <div className="w-full space-y-4 flex items-center justify-center  flex-col">
          <SectionBadge name={"Testimonials"} id={6} />
          <h1 className="text-center text-balance font-semibold leading-[1.3] text-4xl text-header sm:text-6xl md:max-w-xl">
            Real Feedback from Satisfied Customers
          </h1>
          <p className="text-paragraph-text text-center max-w-xl font-medium">
            Discover what real clients have to say about how our services have
            helped them achieve their goals and manage their finances
            effortlessly.
          </p>
        </div>
      </div>
      <div className="pt-8">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          loop={true}
          autoplay={true}
          breakpoints={{
            640: { slidesPerView: 2.4, spaceBetween: 10 },
            768: { slidesPerView: 3.4, spaceBetween: 10 },
            1024: { slidesPerView: 4.4, spaceBetween: 10 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((review) => (
            <SwiperSlide key={review.id} className="">
              <div className="p-4  cursor-pointer rounded-3xl md:w-[100%] space-y-4 bg-[#F2F5F7]">
                <div className="space-y-2 mt-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={review.aurthurImg}
                      className="w-8 h-8 object-cover bg-primary rounded-full"
                      alt="rp"
                    />
                    <div className="">
                      <h1 className="text-header text-base font-semibold">
                        {review.name}
                      </h1>
                      <p className="text-sm font-medium text-header/70">
                        {review.header}
                      </p>
                    </div>
                  </div>

                  <div className=" leading-6 text-sm text-paragraph-text">
                    "{review.text}"
                  </div>
                </div>
                <div className="date-and-user-info-wrapper flex items-center gap-2 my-4 text-gray-800">
                  <img src={Ratings} className="w-18" alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
