import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import { Stack } from 'expo-router';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    secondary: '#03dac6',
  },
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack />
    </PaperProvider>
  );
}