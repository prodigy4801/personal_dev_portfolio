import React from 'react';

// Base props
type BaseProps = {
  children: React.ReactNode;
  className?: string;
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

// Discriminated union
type AnimatedBorderButtonProps = ButtonVariant | AnchorVariant;

export const AnimatedBorderButton = (props: AnimatedBorderButtonProps) => {
  const { children, className = '' } = props;

  if (props.as === 'a') {
    const { as, ...anchorProps } = props;

    return (
      <a
        {...anchorProps}
        className={`relative bg-transparent border border-border
          text-foreground hover:border-primary/50 transition-all
          duration-1000 focus:outline-none focus-visible:ring-2
          focus-visible:ring-primary focus-visible:ring-offset-2
          group px-8 py-4 text-lg font-medium rounded-full
          overflow-visible animated-border ${className}`}
      >
        <AnimatedBorderContent>{children}</AnimatedBorderContent>
      </a>
    );
  }

  // Default: button
  const { as, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={`relative bg-transparent border border-border
        text-foreground hover:border-primary/50 transition-all
        duration-1000 focus:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        group px-8 py-4 text-lg font-medium rounded-full
        overflow-visible animated-border ${className}`}
    >
      <AnimatedBorderContent>{children}</AnimatedBorderContent>
    </button>
  );
};

// Extracted UI (cleaner)
const AnimatedBorderContent = ({ children }: { children: React.ReactNode }) => (
  <>
    <svg
      className='absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border'
      viewBox='0 0 200 60'
      preserveAspectRatio='none'
      style={{ overflow: 'visible' }}
    >
      <path
        d='M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z'
        fill='none'
        stroke='var(--color-primary)'
        strokeWidth='2'
        strokeDasharray='400 550'
        strokeDashoffset='400'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='animated-border-path'
      />
    </svg>

    <span className='relative z-10 flex items-center justify-center gap-2'>{children}</span>
  </>
);
