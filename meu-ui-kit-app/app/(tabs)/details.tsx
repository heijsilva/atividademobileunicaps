import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Text,
  TextInput,
  Switch,
  Chip,
  Divider
} from 'react-native-paper';

export default function DetailsScreen() {
  const [text, setText] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <View style={styles.container}>
      
      <Text variant="headlineSmall">Outros Componentes</Text>

      <Divider style={styles.divider} />

      <TextInput
        label="Digite seu nome"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      <View style={styles.switchContainer}>
        <Text>Modo ativo</Text>
        <Switch
          value={isSwitchOn}
          onValueChange={() => setIsSwitchOn(!isSwitchOn)}
        />
      </View>

      <View style={styles.chipContainer}>
        <Chip icon="account">Usuário</Chip>
        <Chip icon="email">Email</Chip>
        <Chip icon="star">Favorito</Chip>
      </View>

      {text !== '' && (
        <Text style={styles.result}>
          Olá, {text}! 👋
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  divider: {
    marginVertical: 15,
  },
  input: {
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  chipContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
});