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
        <ul>
          <li>Breaking into tech</li>- resume critique - interview topics -
          salary negotiation
          <li>Project consultation</li>- requirements gathering - scoping &
          execution - system design - technical decisions
          <li>Web development</li>- performance & optimization - choosing a web
          stack
          <li>Career growth</li>- Productivity & time management - code review -
          best practices
        </ul>
        <p className="mb-8 leading-relaxed">
          I'm more than happy to chat about any of the topics I listed above. To
          reach me, send me an email with an overview of your requested topic
          area and I'll get back to you as soon as possible.
        </p>
        <ButtonWithIcon
          text="Schedule a consultation"
          href="mailto:me@clemmy.ninja"
          iconName="paper-plane"
          className="bg-green-700"
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
