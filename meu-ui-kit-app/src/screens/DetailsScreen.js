import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Switch, Text } from 'react-native-paper';

export default function DetailsScreen() {
  const [text, setText] = React.useState('');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Componentes Extras</Text>

      <TextInput
        label="Digite algo"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      <View style={styles.switchContainer}>
        <Text>Ativar opção</Text>
        <Switch
          value={isSwitchOn}
          onValueChange={() => setIsSwitchOn(!isSwitchOn)}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginTop: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
``