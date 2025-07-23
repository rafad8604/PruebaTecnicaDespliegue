//Cambiar nombre por otra palabra que no sea reservada

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputNormal: React.FC<InputProps> = (props) => {
  return <input {...props} />;
};

export default InputNormal;
