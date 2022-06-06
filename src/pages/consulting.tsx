import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ButtonWithIcon } from '../components/ButtonWithIcon';
import { Layout } from '../components/Layout';

const ConsultingPage = () => {
  return (
    <Layout className="h-screen">
      <Helmet>
        <title>Consulting and Mentorship</title>
      </Helmet>
      <p>
        topics: - breaking into tech - ersume critique, interview, negotiation -
        system design - FE, web - career growth As of now, im providing this for
        free and my time is limited. send me a msg wih an ovewview and ill get
        back asap
        <ButtonWithIcon
          text="Contact me"
          href="mailto:me@clemmy.ninja"
          iconName="paper-plane"
          className="bg-green-700"
        />
      </p>
    </Layout>
  );
};

export default ConsultingPage;
