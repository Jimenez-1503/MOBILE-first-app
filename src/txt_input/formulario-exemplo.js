import { useState } from "react"
import { Alert, Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native"

export default function FormularioExemplos(){

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")

    const [tarefa, setTarefa]= useState("")
    const [prioridade, setPrioridade] = useState("")

    function handleEnviar(){
        console.log("Nome:", nome, "Idade:", idade)
        setNome("");
        setIdade("");
    }

    function handleAdicionar(){
        if(tarefa.trim() === ""){
            Alert.alert("Atenção,", "O nome da tarefa não pode ser vazia")
            return
        }
        setTarefa("")
        setPrioridade("")
    }

    return(

        <View style={styles.container}>
            <Text style={styles.titulo}>Formulários</Text>
            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}>F1. Formulário com envio</Text>
                <TextInput
                styles={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Seu nome"
                />

                <TextInput
                styles={styles.input}
                value={idade}
                onChangeText={setIdade}
                placeholder="Sua idade"
                keyboardType="numeric"
                />
                <TouchableOpacity styles={styles.botao} onPress={handleAdicionar}/>        
            </View>

            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}>F1. Formulário com envio</Text>
                <TextInput
                styles={styles.input}
                value={tarefa}
                onChangeText={setTarefa}
                placeholder="Nome da tarefa"
                />

                <TextInput
                styles={styles.input}
                value={prioridade}
                onChangeText={setPrioridade}
                placeholder="Nivel de prioridade (Alta, Média ou Baixa)"
                />

                <TouchableOpacity styles={styles.botao} onPress={handleAdicionar}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  // Main container: Centers items and provides a light background
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
 
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  
  botao: {
    backgroundColor: "#4285f4",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
  },
  
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  }

});