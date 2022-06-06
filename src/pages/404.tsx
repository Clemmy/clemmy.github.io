import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ButtonWithIcon } from '../components/ButtonWithIcon';
import { Layout } from '../components/Layout';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <Layout className="h-screen">
      <Helmet>
        <title>404: Not found</title>
      </Helmet>
      <h1 style={headingStyles}>404</h1>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        The page you requested could not be found
        <br />
        <Link to="/">Take me home</Link>. // This should be an internal Link
        <ButtonWithIcon
          text="Take me home"
          href="/"
          iconName="paper-plane"
          className="bg-green-700"
        />
      </p>
    </Layout>
  );
};

export default NotFoundPage;
