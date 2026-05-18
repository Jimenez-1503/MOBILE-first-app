
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContadorExemplo from './hooks/useState-exemplo';
import TelaDeLogin from './hooks/useRef-exemplo';
import TelaMoeda from './hooks/useEffect-exemplo';
import Recados from './hooks/exercicio-1';
import FormularioExemplo from './txt_input/formulario-exemplo';
import FormularioExemplos from './txt_input/formulario-exemplo';
import StackNavigator from './navigation/exemplos/stack-navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
