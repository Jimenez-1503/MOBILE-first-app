import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalheScreen from "../screens-classroom/DetalheScreen";
import HomeScreen from "../screens-classroom/HomeScreen";

const Stack = createNativeStackNavigator();

//Stack.navigator - gerenciador da pilha
//Stack.screen - registro das telas
//name - nome da rota (utilizado para navegar)
//component - o componente que será renderizado

export default function StackNavigator(){ 
    return(
        <Stack.Navigator initialRouteName = "Home"> 
            <Stack.Screen name = "Home" component = {HomeScreen}/> 
            <Stack.Screen name = "Detalhe" component = {DetalheScreen}/> 
        </Stack.Navigator>

    )
}