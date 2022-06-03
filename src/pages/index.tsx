import * as React from 'react';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Your Title</title>
        <meta name="description" content="Description of your page" />
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
      <ion-icon name="heart"></ion-icon>
      <ion-icon name="heart"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="heart-sharp"></ion-icon>
      <ion-icon name="logo-github"></ion-icon>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      # About me I have a passion for building delightful products / find myself
      content when there I have a passion fd In my free time, I love writing,
      cooking, and smashing shuttlecocks. # My links # My Resume? # Let's chat
    </main>
  );
};

export default IndexPage;
