interface ButtonProps {
    text: string;
  }
  
  const Button = ({ text }: ButtonProps) => {
    return (
      <button className="bg-white text-black rounded-full px-3 py-1 font-semibold hover:scale-105">
        {text}
      </button>
    );
  };
  
  export { Button };