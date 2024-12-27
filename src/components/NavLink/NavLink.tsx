'use client';

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function NavLink({ href, className, children }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
} 