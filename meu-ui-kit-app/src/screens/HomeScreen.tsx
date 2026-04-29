import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button,
  Card,
  Text,
  Avatar,
  FAB,
  Snackbar
} from 'react-native-paper';
import { router } from 'expo-router';

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Text variant="headlineMedium" style={styles.title}>
        Meu UI Kit App
      </Text>

      <Card style={styles.card} mode="elevated">
        <Card.Title
          title="React Native Paper"
          subtitle="UI Kit moderno e bonito"
          left={(props) => <Avatar.Icon {...props} icon="react" />}
        />
        <Card.Content>
          <Text variant="bodyMedium">
            Este app demonstra alguns componentes essenciais do UI Kit.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => setVisible(true)}>Mostrar mensagem</Button>
        </Card.Actions>
      </Card>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => router.push('/details')}
      >
        Ir para detalhes
      </Button>

      <Button mode="outlined">Botão secundário</Button>

      {/* FAB */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => setVisible(true)}
      />

      {/* Snackbar */}
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={2000}
      >
        Ação executada com sucesso!
      </Snackbar>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
  },
  button: {
    marginBottom: 10,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});