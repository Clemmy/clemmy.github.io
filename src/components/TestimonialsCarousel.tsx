import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './styles.css';

type TestimonialSlideProps = {
  message: string;
  author: string;
};

const testimonials: Array<TestimonialSlideProps> = [
  { message: 'something something something', author: 'Software Engineer at Fintech Unicorn' },
  { message: '', author: 'Software Engineer at Fintech Unicorn' },
  { message: '', author: 'Software Engineer at Productivity Startup' },
  { message: '', author: 'Intern at Fintech Unicorn' },
  { message: '', author: 'Intern at Fintech Unicorn' },
  { message: '', author: 'Software Engineer at Tesla' },
  { message: '', author: 'Senior Software Engineer at LinkedIn' },
  { message: '', author: 'Software Engineer at Microsoft' },
  { message: '', author: 'CEO of E-Commerce Startup' },
];

function TestimonialSlideContents({ message, author }: TestimonialSlideProps) {
  return (
    <div className=" text-center p-20">
      <div className="text-7xl text-sky-400 leading-5">”</div>
      <div className="font-medium max-w-xl">{message}</div>
      <div className="mt-5">
        <span className="text-gray-500 font-medium"> — {author}</span>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full p-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide>
            <TestimonialSlideContents
              message={testimonial.message}
              author={testimonial.author}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
