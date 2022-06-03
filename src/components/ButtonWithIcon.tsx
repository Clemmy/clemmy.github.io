import React from 'react';
import cx from 'classnames';

type ButtonWithIconProps = {
  text: string;
  iconName: string;
  className?: string;
};

export function ButtonWithIcon({
  text,
  iconName,
  className,
}: ButtonWithIconProps) {
  return (
    <button
      className={cx(
        'mb-2 text-white border py-2 px-6 hover:brightness-75 rounded text-lg flex items-center justify-center',
        className
      )}
    >
      <ion-icon class="mr-2" name={iconName}></ion-icon>
      {text}
    </button>
  );
}
