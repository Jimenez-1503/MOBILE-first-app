import { StyleSheet, Text, View } from "react-native";

export default function Exercicio5() {
  return (
    <View style={styles.container}>
    <View style={{flexDirection: 'row', gap: 8, flex: 1,}}>
          <View style={[styles.blueBox, { flex: 1 }]}>
            <Text style={styles.textStyle}>1</Text>
        </View>
        <View style={[styles.greenBox, { flex: 1 }]}>
            <Text style={styles.textStyle}>1</Text>
        </View>
    </View>
    </View>
    

  ) 
}

const styles = StyleSheet.create({
  container: {
flex:1,

    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  greenBox: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  
  blueBox: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
