import type React from 'react';

type TButtonSize = 'default' | 'sm' | 'lg';

// Base props
type BaseProps = {
  children: React.ReactNode;
  className?: string;
  size?: TButtonSize;
};

// Button variant
type ButtonVariant = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

// Anchor variant
type AnchorVariant = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

// Final props
type ButtonProps = ButtonVariant | AnchorVariant;

export const Button = (props: ButtonProps) => {
  const { children, className = '', size = 'default' } = props;

  const baseClasses =
    'relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25';

  const sizeClasses: Record<TButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  // 🔥 Anchor version
  if (props.as === 'a') {
    const { as, ...anchorProps } = props;

    return (
      <a {...anchorProps} className={classes}>
        {children}
      </a>
    );
  }

  // 🔥 Button version (default)
  const { as, ...buttonProps } = props;

  return (
    <button {...buttonProps} className={classes}>
      <span className='relative flex items-center justify-center gap-2'>{children}</span>
    </button>
  );
};
