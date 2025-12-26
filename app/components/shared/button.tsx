import Link from "next/link";

interface ButtonProps {
    text: string;
    href?: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({ text, href = "", className = "", onClick }: ButtonProps) => {
  return (
    <Link 
      href={href} 
      className={`${className} relative inline-flex items-center justify-center px-6 py-2 rounded-full text-white font-medium text-base transition-all duration-200 hover:opacity-90`}
      style={{
        background: 'linear-gradient(180deg, rgba(255, 107, 0, 1) 0%, rgba(255, 107, 0, 0.95) 50%, rgba(230, 96, 0, 1) 100%)',
        boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.3)'
      }}
      onClick={onClick}
    >
      {text}
    </Link>
  )
}

export default Button;