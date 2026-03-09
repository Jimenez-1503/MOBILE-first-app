import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo from './basic_components/view-exemplo-01'
import Exemplo02 from './basic_components/view-exemplo-02';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo02/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
