import type React from 'react';

type TButtonSize = 'default' | 'sm' | 'lg';
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: TButtonSize;
}

export const Button = ({ className = '', size = 'default', children, ...props }: IButtonProps) => {
  const baseClasses =
    'relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25';

  const sizeClasses: Record<TButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className='relative flex items-center justify-center gap-2'>{children}</span>
    </button>
  );
};
