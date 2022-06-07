import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ButtonWithIcon } from '../components/ButtonWithIcon';
import { Layout } from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout className="h-screen">
      <Helmet>
        <title>404: Not found</title>
      </Helmet>
      <div className="flex flex-col items-center text-center lg:w-2/5 md:w-4/6 w-full pt-[16vh]">
        <h1 className="text-7xl md:text-9xl mb-4 font-medium text-sky-400">
          404
        </h1>
        <h1 className="text-4xl md:text-5xl mb-4 font-medium text-sky-400">
          Page not found
        </h1>
        <p className="mb-8 leading-relaxed">
          The page you requested could not be found. If you feel like this is a
          mistake,{' '}
          <a className="underline" href="mailto:me@clemmy.ninja">
            please contact me
          </a>
          .
        </p>
        <ButtonWithIcon
          text="Take me home"
          href="/"
          iconName="paper-plane"
          className="bg-green-700 s:w-3/4 w-5/6"
          isInternal
        />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
