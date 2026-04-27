
import { StyleSheet, Text, View } from 'react-native';
import Exercico1 from './Prova - Pedro Jimenez/ex-01';
import Exercicio02 from './Prova - Pedro Jimenez/ex-02';
import Exercicio07 from './Lista-2 (FlexBox e ViewComponent)/exercicio-7';
import Exercicio6  from './Lista-2 (FlexBox e ViewComponent)/exercicio-6';
import Exercicio08 from './Lista-2 (FlexBox e ViewComponent)/exercicio-8';
import Exercicio09 from './Lista-2 (FlexBox e ViewComponent)/exercicio-9';


export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio09/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
