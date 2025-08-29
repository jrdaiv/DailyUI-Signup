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
      className='w-full p-2 border border-gray-300 rounded bg-white mb-2'
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default SignupInput;
