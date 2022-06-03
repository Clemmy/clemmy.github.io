import * as React from 'react';
import { Helmet } from 'react-helmet';
import 'ionicons/dist/esm-es5';
import 'ionicons';

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Your Title</title>
        <meta name="description" content="Description of your page" />
        {/* <script defer type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script defer noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
      </Helmet>
      {/* <title>Home Page 123</title> */}
      <ion-icon name="heart"></ion-icon>
      <ion-icon name="heart"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="heart-sharp"></ion-icon>
      <ion-icon name="logo-github"></ion-icon># About me I have a passion for
      building delightful products / find myself content when there I have a
      passion fd In my free time, I love writing, cooking, and smashing
      shuttlecocks. # My links # My Resume? # Let's chat
    </main>
  );
};

export default IndexPage;
