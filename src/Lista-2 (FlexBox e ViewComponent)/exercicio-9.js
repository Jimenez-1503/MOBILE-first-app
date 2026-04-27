import { StyleSheet, View } from "react-native";

export default function ExercicioSemaforo() {
  return (
    <View style={styles.container}>
      
      <View style={styles.semaforo}>
        <View style={styles.redBox}></View>
        <View style={styles.yellowBox}></View>
        <View style={styles.greenBox}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",    
  },

  semaforo: {
    width: 120,
    height: 300,
    backgroundColor: "#2c3e50",
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  redBox: {
    width: 80,
    height: 80,
    backgroundColor: "red",
    borderRadius: 40, 
  },

  yellowBox: {
    width: 80,
    height: 80,
    backgroundColor: "yellow",
    borderRadius: 40,
  },

  greenBox: {
    width: 80,
    height: 80,
    backgroundColor: "green",
    borderRadius: 40,
  },

});