import Title from './Title';
import Input from './Input';
import Button from './Button';
import InputSelect from './InputSelect';



const InfoForm = () => {
  return(
    <div>
      <Title title = "Información de usuarios recaudadores" />
      <InputSelect />
      <InputSelect />
      <InputSelect />
      <Input />
      <Input />
      <Input />
      <Input />
      <InputSelect />
      <Button text = "Generar direccion" />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Button text = "Actualizar" />
      <Button text = "Guardar" />

    </div>
  )
};

export default InfoForm;