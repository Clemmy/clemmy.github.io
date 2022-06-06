import cx from 'classnames';

export function Layout({
  children,
  className = 'h-full',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cx(
        'bg-slate-900 text-slate-50 body-font font-raleway',
        className
      )}
    >
      <div className="container mx-auto flex px-8 pt-12 md:pt-24 pb-4 items-center justify-center flex-col">
        {children}
      </div>
      <footer className="pb-8 md:pb-20 flex justify-center">
        <span>&copy; {new Date().getFullYear()} Clement Hoang</span>
      </footer>
    </main>
  );
}
