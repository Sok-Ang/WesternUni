import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import PropTypes from "prop-types";

const EventSwiper = ({ events }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <div className="card hover:bg-slate-100 bg-transparent w-full flex flex-col mb-2 p-1 rounded-lg transition-all duration-200 ease-in-out hover:shadow-md">
            <div className="flex gap-4">
              <figure className="bg-contain rounded-xl w-auto h-[6rem] overflow-hidden">
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </figure>
              <div className="flex-1">
                <h2 className="font-semibold text-xs line-clamp-2 mb-2">
                  {event.title}
                </h2>
                <p className="text-xs line-clamp-3 text-gray-600">
                  {event.summary}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

EventSwiper.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventSwiper;