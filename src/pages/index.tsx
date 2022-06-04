import { Helmet } from 'react-helmet';
import { ButtonWithIcon } from '../components/ButtonWithIcon';
import { FlippableAvatar } from '../components/FlippableAvatar';

const IndexPage = () => {
  return (
    <main className="bg-slate-900 text-sky-400 h-full">
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
        <div className="container mx-auto flex px-8 pt-12 md:pt-24 pb-4 items-center justify-center flex-col">
          <FlippableAvatar />
          <div className="text-center lg:w-2/5 md:w-4/6 w-full">
            <h1 className="title-font text-5xl mb-4 font-medium">
              Clement Hoang
            </h1>
            <p className="mb-8 leading-relaxed text-slate-50">
              A software engineer with a wide experience from early-stage
              startups to large-scale engineering organizations. I am passionate
              about designing and creating delightful product experiences. In my
              free time, I love{' '}
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
              . I also provide{' '}
              <a className="underline" href="">
                consulting and mentorship
              </a>
              .
            </p>

            <div className="flex flex-col justify-center">
              <ButtonWithIcon
                text="See my open source"
                href='https://github.com/clemmy'
                iconName="logo-github"
                className="bg-zinc-800 border border-white"
              />
              <ButtonWithIcon
                text="Read my articles"
                href='https://medium.com/@clemmmy'
                iconName="logo-medium"
                className="bg-zinc-800"
              />
              <ButtonWithIcon
                text="View my resume"
                href='/resume.pdf'
                iconName="briefcase"
                className="bg-red-900"
              />
              <ButtonWithIcon
                text="Cook with my recipes"
                href='https://instagram.com/professor.pan'
                iconName="restaurant"
                className="bg-orange-800"
              />
              <ButtonWithIcon
                text="Buy me coffee"
                href='asdf'
                iconName="logo-venmo"
                className="bg-yellow-800"
              />
              <ButtonWithIcon
                text="Connect with me"
                href='https://ca.linkedin.com/in/clementhoang'
                iconName="logo-linkedin"
                className="bg-blue-800"
              />
              <ButtonWithIcon
                text="Follow my tweets"
                href='https://twitter.com/c8hoang'
                iconName="logo-twitter"
                className="bg-blue-600"
              />
              <ButtonWithIcon
                text="Let's chat"
                href='mailto:me@clemmy.ninja'
                iconName="paper-plane"
                className="bg-green-700"
                shouldAnimate
              />
            </div>
          </div>
        </div>
        <footer className="pb-8 md:pb-20 flex justify-center">
          <span>&copy; {new Date().getFullYear()} Clement Hoang</span>
        </footer>
      </section>
    </main>
  );
};

export default IndexPage;
