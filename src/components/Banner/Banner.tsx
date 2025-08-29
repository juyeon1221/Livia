import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import bannerImg1 from "../../asset/Mask Group.png";
 
const slides = [
    {id:1, href:"/", img: bannerImg1, alt:"배너이미지1"},
    {id:2, href:"/", img: bannerImg1, alt:"배너이미지1"},
    {id:3, href:"/", img: bannerImg1, alt:"배너이미지1"},
    {id:4, href:"/", img: bannerImg1, alt:"배너이미지1"},
];

export default function Banner () {
    return (
        <div className="banner_wrap">
            <Swiper
            modules={[Autoplay, Pagination, Navigation, A11y]}
            loop
            autoplay={{delay:2000, disableOnInteraction:false,
            pauseOnMouseEnter:true}}
            navigation={false}
            breakpoints={{
                0:{slidesPerView:1, spaceBetween:8},
                640:{slidesPerView:1, spaceBetween:12},
                1024:{slidesPerView:1, spaceBetween:16},
            }}
            a11y={{enabled:true}}
            >
                {slides.map(s => (
                    <SwiperSlide key={s.id}>
                        <a href={s.href} aria-label={s.alt} className="banner_card">
                            <img src={s.img} alt={s.alt} loading="lazy" />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )    
}
