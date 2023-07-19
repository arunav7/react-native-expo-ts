/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RenderHTML, { CustomBlockRenderer } from 'react-native-render-html';

import { Button } from '@react-native-material/core';
import Header from '../Header';

const { width } = Dimensions.get('window');
const source = {
  html: `
  <b>This is bold text</b>
  `,
};

const tagsStyles = {
  div: {
    color: 'gray',
    width,
    height: '20px',
  },
  a: {
    color: 'green',
  },
};

const CustomDivRenderer = ({ style, children }) => {
  console.log({ style });
  // const overrideStyle = StyleSheet.flatten(style); // Flattening the style object
  // console.log({ overrideStyle });

  // Check if the element has a specific style property and override it
  // if (overrideStyle.width > width) {
  //   console.log('inside');
  //   return <View style={{ width: width - 20 }}>{children}</View>;
  // }

  // Render the element with the default style
  return <View>{children}</View>;
};

const DivRenderer: CustomBlockRenderer = function DivRenderer({
  TDefaultRenderer,
  style,
  ...props
}) {
  // console.warn({ style });
  const overrideStyle = StyleSheet.flatten(style);
  // console.warn({ overrideStyle });
  if (
    overrideStyle &&
    overrideStyle.width &&
    (overrideStyle.width as number) > width
  ) {
    overrideStyle.width = width - 20;
    console.warn({ overrideStyle });
  }

  return (
    <CustomDivRenderer style={style}>
      <TDefaultRenderer
        {...props}
        style={overrideStyle}
      />
    </CustomDivRenderer>
  );
};

const renderers = {
  div: DivRenderer,
};

const LoginScreen: React.FC = (): JSX.Element => {
  const { navigate } = useNavigation<any>();
  const [text, setText] = useState<string>();
  return (
    <ScrollView>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          padding: 10,
          width,
        }}
      >
        <RenderHTML
          source={source}
          contentWidth={width}
          renderers={renderers}
        />
        <Button
          title='Products'
          variant='outlined'
          color='thistle'
          style={{ width: '50%' }}
          onPress={() => navigate('Products')}
        />
        <Button
          title='Albums'
          variant='outlined'
          color='thistle'
          style={{ width: '50%' }}
          onPress={() => navigate('Albums')}
        />
      </View>
      <View style={styles.container}>
        <Text>LoginScreen</Text>
        <TextInput
          placeholder='User Name'
          placeholderTextColor='orange'
          style={styles.input}
          value={text}
          onChangeText={text => setText(text)}
        />
        <Button
          variant='contained'
          title='Login'
          style={{ width: '50%' }}
          color='thistle'
          onPress={() => navigate('Form', { name: text })}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cornsilk',
    paddingVertical: 10,
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'khaki',
    marginVertical: 10,
    padding: 10,
    color: 'purple',
    width: '100%',
  },
});

export default LoginScreen;
