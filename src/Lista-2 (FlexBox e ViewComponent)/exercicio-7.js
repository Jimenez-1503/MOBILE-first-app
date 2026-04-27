import { StyleSheet, View } from "react-native";

export default function ExercicioGridFlex() {
  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        <View style={[styles.redBox]}></View>
        <View style={[styles.blueBox]}></View>
      </View>

      <View style={styles.row}>
        <View style={[styles.greenBox]}></View>
        <View style={[styles.orangeBox]}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,                 
    flexDirection: "column",  
    padding: 20,              
    gap: 10,           
  },

  row: {
    flex: 1,                
    flexDirection: "row",     
    gap: 10,                 
  },

  redBox: {
    backgroundColor: "red",
    flex: 1,
  },

  blueBox: {
    backgroundColor: "blue",
    flex: 1,
  },

  greenBox: {
    backgroundColor: "green",
    flex: 1,
  },

  orangeBox: {
    backgroundColor: "orange",
    flex: 1,
  }
});