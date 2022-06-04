import cx from 'classnames';

type ButtonWithIconProps = {
  text: string;
  href: string;
  iconName: string;
  className?: string;
  shouldAnimate?: boolean;
};

export function ButtonWithIcon({
  text,
  href,
  iconName,
  className,
  shouldAnimate = false,
}: ButtonWithIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={cx(
        'mb-3 text-white border-0 py-2 px-6 hover:brightness-75 rounded text-lg flex items-center justify-center cursor',
        className,
        {
          'motion-safe:animate-periodicSlideRight': shouldAnimate,
        }
      )}
    >
      <ion-icon class="mr-2" name={iconName}></ion-icon>
      {text}
    </a>
  );
}
