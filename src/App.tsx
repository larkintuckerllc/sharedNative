import hello, { random } from 'larkintuckerllc-example/dist/hello';
import there from 'larkintuckerllc-example/dist/there';
import useDelay from 'larkintuckerllc-example/dist/useDelay';
import React, { FC } from 'react';
import { Text, View } from 'react-native';

const App: FC = () => {
  const waiting = useDelay();
  console.log(hello);
  console.log(there);
  const randomString = random();
  console.log(randomString);
  console.log(waiting);

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
