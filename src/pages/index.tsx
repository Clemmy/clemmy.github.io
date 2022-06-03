import * as React from 'react';
import { Helmet } from 'react-helmet';
import { ButtonWithIcon } from '../components/ButtonWithIcon';
import { FlippableAvatar } from '../components/FlippableAvatar';

const IndexPage = () => {
  return (
    <main className="bg-slate-900 text-sky-400">
      <Helmet>
        <title>Clement Hoang</title>
        <meta
          name="description"
          content="Where you can find a map of Clement's online footprint."
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
          type="text/css"
        />
        <script
          defer
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          defer
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Helmet>

      <section className="body-font font-raleway">
        <div className="container mx-auto flex px-8 py-24 items-center justify-center flex-col">
          <FlippableAvatar />
          <div className="text-center lg:w-2/5 md:w-4/6 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Clement Hoang
            </h1>
            <p className="mb-8 leading-relaxed text-slate-50">
              I have a passion for building delightful products / find myself
              content when there I have a passion fd In my free time, I love{' '}
              <a className="underline" href="">
                writing
              </a>
              ,{' '}
              <a className="underline" href="">
                cooking
              </a>
              , and{' '}
              <a className="underline" href="">
                smashing shuttlecocks
              </a>
              .
            </p>

            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              My links
            </h1>

            <div className="flex flex-col justify-center">
              <ButtonWithIcon
                text="See my open source"
                iconName="logo-github"
                className="bg-black-500 border border-white"
              />
              <ButtonWithIcon
                text="Follow my (re)tweets"
                iconName="logo-twitter"
                className="bg-blue-500"
              />
              <ButtonWithIcon
                text="Cook with my recipes"
                iconName="restaurant"
              />
              <ButtonWithIcon
                text="Read my mind's dabbles"
                iconName="logo-medium"
                className="bg-black-500"
              />
              <ButtonWithIcon text="Connect with me" iconName="logo-linkedin" />
              <ButtonWithIcon
                text="Buy me coffee"
                iconName="logo-venmo"
                className="bg-indigo-500"
              />
              <ButtonWithIcon text="My resume" iconName="briefcase" />
              <ButtonWithIcon
                text="Let's chat"
                iconName="paper-plane-outline"
              />
            </div>

            <footer>
              <span>&copy; {new Date().getFullYear()} Clement Hoang</span>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
