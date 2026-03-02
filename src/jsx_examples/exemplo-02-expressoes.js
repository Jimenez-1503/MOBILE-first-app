import { View, Text, StyleSheet } from "react-native";

export default function Exemplo02() {

    const nome = "Maria";
    const idade = 20;
    const preco = 40.6;

    const usurario = {
        nome: "Ana",
        cidade: "Salto",
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>1. Variaveis</Text> //titulo
            <Text style={styles.subtitulo}>Váriaveis Comuns</Text> //subtitulo
        <View> //exemplo
            <Text style={styles.exemplo}>Nome:{nome.toUpperCase()}</Text>
            <Text style={styles.exemplo}>Idade: {idade}</Text>
            <Text style={styles.exemplo}>Preço: {preco * 2}</Text>
        </View>
        <View> //exemplo
            <Text style={styles.exemplo}>Nome: {usurario.nome}</Text>
            <Text style={styles.exemplo}>Cidade: {usurario.cidade}</Text>            
        </View>
        </View>

    )


  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
