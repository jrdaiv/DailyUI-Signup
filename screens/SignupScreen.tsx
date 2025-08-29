import React, { useState } from 'react';
import SignupInput from 'components/SignupInput';
import { Text, View } from 'react-native';


const SignupScreen: React.FC = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
          <View className='flex-1 justify-center items-center p-4 bg-white'>
            <Text>Sign Up</Text>
            <SignupInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <SignupInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <SignupInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </>
    );
}

export default SignupScreen;
