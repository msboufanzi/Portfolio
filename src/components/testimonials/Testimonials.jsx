import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/ben-hamda-saber-22b2ab254/',
      name: 'Ben Hamda SaberView Ben Hamda Saber’s profile ',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.',
      test: 'As a developer and problem solver, I find Boufanzi to be an excellent collaborative partner. I first worked with Mohamed Said on basic JavaScript and React projects, and since then, they have made remarkable progress in their understanding of the development process. Boufanzi maintains a highly professional environment, with excellent audio and video quality, making communication seamless and efficient.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/junior-josias-bambara-10a7661b9/',
      name: 'Junior Josias Bambara',
      role: 'Full-stack developer | Technical Support Engineer at CodeAlpha',
      test: "It was a pleasure collaborating with Mohamed Said Boufanzi on various projects. One of the things that stands out about him is his relentless drive to improve—even after completing projects, he seeks out additional resources to deepen his knowledge. Working with him is effortless and comfortable, as if you’re collaborating with someone you’ve known for years.",
    },
    // {
    //   id: 3,
    //   link: 'https://www.linkedin.com/in/akuu-khan/',
    //   name: 'akbar (Aku) Khan',
    //   role: 'Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
    //   test: 'I worked with Meri in the same team and her communication skills are very strong. Her programming skill is one of the bests, given the time frame in the field. She is a good team player.  She will probably fit in most of the companies not only because she\'s a good team worker, but also because she has very good skills and I know she has much more potential to be shown.',
    // },
    // {
    //   id: 4,
    //   link: 'https://www.linkedin.com/in/isaicespedes/',
    //   name: 'Isai Céspedes',
    //   role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
    //   test: "I mentored Meri some months ago, and I can say that she is one of those people that you love to work with. She was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, she is really committed to work, always doing her best and going beyond the requirements of the project she's building.",
    // },
    // {
    //   id: 5,
    //   link: 'https://www.linkedin.com/in/hamzaalitarar/',
    //   name: 'Hamza Tarar',
    //   role: 'Software Developer',
    //   test: "Throughout all our collaborations, Meri has always conducted herself politely and kindly. She comes across as someone that's always willing to help and puts the team ahead of herself. But beneath this, I see a strength and determination to distinguish herself. She's not only someone I highly recommend but is also someone I greatly respect.",
    // },
    // {
    //   id: 6,
    //   link: 'https://www.linkedin.com/in/rex9/',
    //   name: 'Htet (Rex) Naing',
    //   role: 'Full Stack Developer | Mindful Mentor | Cheerful Team Player',
    //   test: "Meri is really cheerful and supportive person. I know her when she reviewed my resume. Her feedback was so crystal clear and super effective for me. After that, even though she has no responsibility of reviewing my resume again. She helped me patiently when I ask her again and again. Meri is gifted in reviewing the work and giving advice to others. I feel really lucky to have her as the reviewer of my resume.",
    // },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials