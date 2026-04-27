import { StyleSheet, Text, View } from "react-native";

export default function Exercicio08() {
  return(
  <View style={styles.container}>
    <View style={styles.sidebarBox}>
      <Text style={styles.textStyle}>Sidebar</Text>
    </View>
    <View style={styles.cardBox}>
      <View style={styles.yellowBox}>
        <Text style={styles.textStyle}>Card-1</Text>
      </View>
      <View style={styles.greenBox}>
      <Text style={styles.textStyle}>Card-2</Text>
      </View>
      <View style={styles.blueBox}>
      <Text style={styles.textStyle}>Card-3</Text>
      </View>
     </View>
  </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "row",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign:"center"
  },

  cardBox: {
    flex: 1, 
    padding: 10,
    gap: 10,
  },

  yellowBox: {
    backgroundColor: "yellow",
    height: 100,
    borderRadius: 8,
    flex:1,
  },

  greenBox: {
    height: 100,
    borderRadius: 8,
    backgroundColor: "green",
    flex:1,
  },

  blueBox: {
    height: 100,
    borderRadius: 8,
    backgroundColor: "blue",
    flex: 1,
  },

   sidebarBox: {
    width: 80,
    backgroundColor: "#95a5a6",
    justifyContent: "center",
    alignItems: "center",
  },


});
