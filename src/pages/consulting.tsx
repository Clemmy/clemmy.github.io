import { Helmet } from 'react-helmet';
import { ButtonWithIcon } from '../components/ButtonWithIcon';
import { Layout } from '../components/Layout';

const ConsultingPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Consulting and Mentorship</title>
      </Helmet>
      <div className="lg:w-2/5 md:w-4/6 w-full">
        <h1 className="text-5xl mb-4 font-medium text-sky-400">
          Consulting and Mentorship
        </h1>
        <p className="mb-8 leading-relaxed">
          I am a software engineer that has worked in a variety of roles ranging
          from early-stage startups to bigger organizations. My strength lies in
          dealing with ambiguity, breaking down complex pieces of product
          requirements into MVPs that maximize user impact. I also make informed
          technical choices to design systems that prioritize maintainability
          and evolvability.
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
        <h1 className="text-4xl mb-4 font-medium text-sky-400">Topics</h1>
        <p className="mb-8 leading-relaxed">
          I'm more than happy to chat about any of the topics listed below. To
          reach me, send me an email with an overview of your requested topic
          area and I'll get back to you as soon as possible.
        </p>
        <ul className="list-disc">
          <li className='mb-1'>
            <span className="font-bold">Breaking into tech</span> - Having
            worked at over 8 different companies and applying to hundreds more,
            I am familiar with the makings of a good resume, interview themes,
            and salary negotiation.
          </li>
          <li className='mb-1'>
            <span className="font-bold">Project consultation</span> - From
            gathering requirements to architecture, scoping, and execution, I
            can help you maximize your business impact.
          </li>
          <li className='mb-1'>
            <span className="font-bold">Web development</span> - My roots
            started in ASP.NET MVC and Angular, and my go-to front-end library
            is now React. I can also speak to performance and optimization, from
            my extensive experience with server-side rendering, code-splitting,
            and designing interactive applications.
          </li>
          <li className='mb-1'>
            <span className="font-bold">Career growth</span> - How to get to the
            next level in your software engineering journey. I am provide advice
            on time management, code review, and general best practices.
          </li>
        </ul>
        <ButtonWithIcon
          text="Schedule a consultation"
          href="mailto:me@clemmy.ninja"
          iconName="paper-plane"
          className="bg-green-700 mt-8"
        />
        <div>What clients say</div>- Software Engineer at Fintech Unicorn -
        Software Engineer at Fintech Unicorn - Software Engineer at Productivity
        Startup - Intern at Fintech Unicorn - Intern at Fintech Unicorn -
        Software Engineer at Tesla - Senior Software Engineer at LinkedIn -
        Software Engineer at Microsoft - CEO of E-Commerce Startup
      </div>
    </Layout>
  );
};

export default ConsultingPage;
