import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo from './basic_components/view-exemplo-01'
import Exemplo02 from './basic_components/view-exemplo-02';
import Exemplo01 from './basic_components/view-exemplo-01';
import Lista01 from './Lista-2 (FlexBox e ViewComponent)/exercicio(1-4)';
import Exercicio5 from './Lista-2 (FlexBox e ViewComponent)/exercicio-5';
import Exercicio6 from './Lista-2 (FlexBox e ViewComponent)/exercicio-6';

export default function () {
  return (
    <View style={styles.container}>
      <Exercicio6/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
