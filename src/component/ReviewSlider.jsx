import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const reviews = [
  {
    id: 1,
    name: "Ahmed Rahman",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Amazing collection of Islamic books. Delivery was super fast and packaging was excellent.",
  },
  {
    id: 2,
    name: "Fatema Noor",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Very professional bookstore. Prices are reasonable and books are authentic.",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    image:
      "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    review:
      "Beautiful UI and smooth shopping experience. Highly recommended.",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    image:
      "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    review:
      "I found all academic books in one place. Customer support is also very good.",
  },
];

const ReviewSlider = () => {
  return (
    <section className="md:w-[75%] px-2 w-full mx-auto py-5 shadow-lg bg-white overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-10">
       

        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
          What Readers Say
        </h2>

        <p className="text-gray-500 mt-3 text-sm lg:text-base">
          Trusted by thousands of book lovers across Bangladesh
        </p>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!overflow-visible"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>

            <div className="group h-full bg-white border border-gray-200 p-4 shadow-sm hover:shadow-xl transition-all duration-500">

              {/* TOP */}
              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                />

                <div>
                  <h3 className="font-bold text-gray-800">
                    {item.name}
                  </h3>

                  {/* RATING */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={
                          i < item.rating
                            ? "#f59e0b"
                            : "none"
                        }
                        className={
                          i < item.rating
                            ? "text-amber-500"
                            : "text-gray-200"
                        }
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* REVIEW */}
              <p className="mt-5 text-sm leading-7 text-gray-600">
                “{item.review}”
              </p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default ReviewSlider;