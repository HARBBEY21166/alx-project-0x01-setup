// components/common/Button.tsx
const Button: React.FC<{
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
  }> = ({ onClick, children, className = '' }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-full transition-colors ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;