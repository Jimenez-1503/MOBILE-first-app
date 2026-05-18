
import { StyleSheet, Text, View } from 'react-native';
import ContadorExemplo from './hooks/useState-exemplo';
import TelaDeLogin from './hooks/useRef-exemplo';
import TelaMoeda from './hooks/useEffect-exemplo';
import Recados from './hooks/exercicio-1';
import FormularioExemplo from './txt_input/formulario-exemplo';
import FormularioExemplos from './txt_input/formulario-exemplo';

export default function App() {
  return (
    <NavigationConteiner style={styles.container}>
      <FormularioExemplos/>
    </NavigationConteiner> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
