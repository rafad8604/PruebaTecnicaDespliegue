//Cambiar nombre por otra palabra que no sea reservada

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputNormal: React.FC<InputProps> = (props) => {
  return (
  <input {...props} className="border border-gray-300 w-full h-10 mt-2 px-3 font-serif font-light rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
);
};

export default InputNormal;
