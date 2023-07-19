// @ts-nocheck
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import { Button, VStack } from '@react-native-material/core';
import { FlatList } from 'react-native/Libraries/Lists/FlatList';
import { RouteProp, useRoute } from '@react-navigation/native';

type FromProps = {
  value: string;
  onPress: () => void;
  onChange: (text: string) => void;
  formStyles?: StyleProp<ViewStyle | TextStyle>[];
};

const Form: React.FC<FromProps> = ({
  value = '',
  onPress,
  onChange,
  formStyles = {},
}): JSX.Element => {
  const route = useRoute<RouteProp>();
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const { name } = route.params;

  const addItems = () => {
    setItems([...items, text]);
    setText('');
  };

  return (
    <View style={[styles.container, formStyles]}>
      <Text style={{ fontSize: 25 }}>Hello: {name}</Text>
      <TextInput
        placeholder='Just a text'
        placeholderTextColor='orange'
        style={styles.input}
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button
        variant='contained'
        title='Add'
        style={{ width: '50%', alignSelf: 'center', marginBottom: 10 }}
        color='thistle'
        onPress={addItems}
      />
      <Text style={{ fontSize: 22 }}>Items: </Text>
      {items?.map((item, id) => (
        <Text
          key={id}
          style={{ fontSize: 18 }}
        >
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 10,
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'khaki',
    marginVertical: 20,
    padding: 10,
    color: 'purple',
    width: '100%',
  },
});

export default Form;
