import { InputContainer } from "./style";
import { FunctionComponent } from 'react';

interface InputProps{
  value: number | string
}

const Input:FunctionComponent<InputProps> = ({value}) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
};

export default Input;
