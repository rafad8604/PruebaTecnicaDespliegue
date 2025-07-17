import Title from './Title';
import Input from './Input';
import Button from './Button';
import InputSelect from './InputSelect';



const InfoForm = () => {
  return(
    <form action="submit">
      <div>
      <Title title = "Información de usuarios recaudadores" />
      <InputSelect />
      <InputSelect />
      <InputSelect />
      <Input placeholder='Digito de verificación'/>
      <Input placeholder='Razón social'/>
      <Input placeholder='Nombre comercial'/>
      <Input placeholder='Dirección'/>
      <InputSelect />
      <Button text = "Generar direccion" />
      <Input placeholder='Correo electrónico'/>
      <Input placeholder='Confirmar correo electrónico'/>
      <Input placeholder='Numero de celular'/>
      <Input placeholder='Confirmar de numero de celular'/>
      <Input placeholder='Quien diligencia el formulario'/>
      <Input placeholder='Cargo'/>
      <Input placeholder='Area'/>
      <Button text = "Actualizar" type='submit'/>
      <Button text = "Guardar" type='submit'/>
    </div>
    </form>

  )
};

export default InfoForm;