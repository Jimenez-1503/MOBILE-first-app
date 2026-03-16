import { StyleSheet, Text, View } from "react-native";

export default function Lista01() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> Exercício 1 — Coluna de Três Caixas</Text>
      <View style={{ flexDirection: 'column', height: 300, gap: 20,}}>
        <View style={styles.redBox}>
          <Text style={styles.textFlex}>Vermelho</Text>
        </View>
        <View style={styles.blueBox}>
          <Text style={styles.textFlex}>Azul</Text>
        </View>
        <View style={styles.greenBox}>
          <Text style={styles.textFlex}>Verde</Text>
        </View>
      </View>

      <Text style={styles.textStyle}>Exercício 2 — Três Caixas em Linha</Text>
      <View style={{flexDirection: 'row', gap: 10,}}>
        <View style={styles.redBox}>
          <Text style={styles.textFlex}>Vermelho</Text>
        </View>
        <View style={styles.blueBox}>
          <Text style={styles.textFlex}>Azul</Text>
        </View>
        <View style={styles.greenBox}>
          <Text style={styles.textFlex}>Verde</Text>
        </View>
      </View>

      <Text style={styles.textStyle}>Exercício 3 — Espaçamento com space-between</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>         
        <View style={styles.redBox}>
          <Text style={styles.textFlex}>Vermelho</Text>
        </View>
        <View style={styles.blueBox}>
          <Text style={styles.textFlex}>Azul</Text>
        </View>
        <View style={styles.greenBox}>
          <Text style={styles.textFlex}>Verde</Text>
        </View>
      </View>
      
      <Text style={styles.textStyle}>Exercício 4 — Caixa Centralizada</Text>
      <View style={{ flexDirection: 'column',}}>
        <View style={styles.yellowBox}>
          <Text style={styles.textFlex}>Centro</Text>
        </View>
      </View>
      
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },

  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  
  redBox: {
    height: 70,
    width: 70,
    gap: 20,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 70,
    width: 70,
    gap: 20,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 70,
    width: 70,
    gap: 20,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  yellowBox: {
    height: 120,
    width: 120,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },

  textFlex: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

