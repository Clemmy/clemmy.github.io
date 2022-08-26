import { Helmet } from 'react-helmet';
import { BackToHome } from '../components/BackToHome';
import { ButtonWithIcon } from '../components/ButtonWithIcon';
import { Layout } from '../components/Layout';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';

const ConsultingPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Consulting and Mentorship</title>
      </Helmet>
      <div className="flex flex-col lg:w-2/5 md:w-4/6 w-full">
        <BackToHome className="mb-6" />
        <h1 className="text-5xl mb-4 font-medium leading-tight text-sky-400 font-semibold">
          Consulting and Mentorship
        </h1>
        <p className="mb-8 leading-relaxed">
          I am a software engineer who has worked in a variety of roles ranging
          from early-stage startups to bigger organizations. My strength lies in
          dealing with ambiguity, breaking down complex pieces of product
          requirements into MVPs that maximize user impact.
          <br />
          <br />
          <span className="italic">
            "A smart man learns from his mistakes. A wise man learns from the
            mistakes of others".
          </span>
          <br />
          <br />I find immense value in learning from others, whether it be
          through reading books, watching videos, or more dedicated mentorship.
          I have learned a great deal this way and would love to give back to
          the community.
        </p>
        <h1 className="text-4xl mb-4 font-medium text-sky-400 font-semibold">
          Topics
        </h1>
        <p className="leading-relaxed">
          I'm more than happy to chat about any of the topics listed below. To
          reach me, send me an email with an overview of your requested topic
          area and I'll get back to you as soon as possible.
        </p>
        <h2 className="text-2xl mt-4 mb-2 font-medium text-sky-400 font-semibold">
          👊 Breaking into tech
        </h2>
        <p className="leading-relaxed">
          Having worked at over 8 different companies and applying to hundreds
          more, I can help you with improving your resume, cracking the coding
          interview, as well as salary negotiation.
        </p>
        <h2 className="text-2xl mt-4 mb-2 font-medium text-sky-400 font-semibold">
          👷‍♀️ Project consultation
        </h2>
        <p className="leading-relaxed">
          From gathering requirements to architecture, scoping, and execution, I
          can help you maximize your business impact.
        </p>
        <h2 className="text-2xl mt-4 mb-2 font-medium text-sky-400 font-semibold">
          🌐 Web development
        </h2>
        <p className="leading-relaxed">
          My roots started in ASP.NET MVC and Angular, and my go-to front-end
          library is now React. I can also speak to performance and
          optimization, from my extensive experience with server-side rendering,
          code-splitting, and designing interactive applications.
        </p>
        <h2 className="text-2xl mt-4 mb-2 font-medium text-sky-400 font-semibold">
          📈 Career growth
        </h2>
        <p className="leading-relaxed">
          How to get to the next level in your software engineering journey. I
          can provide advice on code review, general best practices, time
          management, collaboration, and tech leadership.
        </p>
        <ButtonWithIcon
          text="Schedule a consultation"
          href="mailto:me@clemmy.ninja"
          iconName="paper-plane"
          className="bg-green-700 mt-8"
        />
        <span className="inline-block h-1 w-20 rounded bg-sky-400 mt-6 mb-4 self-center"></span>
        <TestimonialsCarousel />
      </div>
    </Layout>
  );
};

export default ConsultingPage;
