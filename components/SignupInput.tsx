import React from 'react';
import { TextInput } from 'react-native';

interface Props {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const SignupInput: React.FC<Props> = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <TextInput
      className='w-72 p-2 border border-white rounded mb-2 bg-white/80 '
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default SignupInput;
