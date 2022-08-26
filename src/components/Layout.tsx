import cx from 'classnames';
import { Helmet } from 'react-helmet';
import { initTracking } from '../utils/tracking';

export function Layout({
  children,
  className = 'h-full',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  initTracking();

  return (
    <main
      className={cx(
        'bg-slate-900 text-slate-50 body-font font-quicksand text-lg',
        className
      )}
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
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
      <div className="container mx-auto flex px-8 pt-12 md:pt-24 pb-4 items-center justify-center flex-col">
        {children}
      </div>
      <footer className="pb-8 md:pb-20 flex justify-center">
        <span>&copy; {new Date().getFullYear()} Clement Hoang</span>
      </footer>
    </main>
  );
}
