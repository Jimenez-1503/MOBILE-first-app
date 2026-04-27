import { View, StyleSheet, Text } from "react-native";

export default function Exercicio01() {
  return (
    
    <View style={styles.container}>
    
      <View style={styles.topBox}>
        <View style={styles.yelloBox}>
          <Text style={styles.textStyle}>Amarelo</Text>
        </View> 

        <View style={styles.blueBox}>
          <Text style={styles.textStyle}>Azul</Text>
        </View>
      </View>

      <View style={styles.centerBox}>
        
        <View style={styles.greenBox}>
          <Text style={styles.textStyle}>Verde</Text>
        </View>

        <View style={styles.collunBox}>
          <View style={styles.pinkBox}>
            <Text style={styles.textStyle}>Rosa</Text>
          </View>

          <View style={styles.orangeBox}>
            <Text style={styles.textStyle}>Laranja</Text>
          </View>
        </View>

      </View>

      <View style={styles.footerBox}>
        <View style={styles.redBox}>
          <Text style={styles.textStyle}>Vermelho</Text>
        </View>

        <View style={styles.tealBox}>
          <Text style={styles.textStyle}>Teal</Text>
        </View>

        <View style={styles.purpleBox}>
          <Text style={styles.textStyle}>Roxo</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 8,
  },

  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },

  topBox: {
    height: 100,
    flexDirection: "row",
    gap: 8,
  },

  yelloBox: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  blueBox: {
    flex: 3,
    backgroundColor: "#001f3f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  centerBox: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  greenBox: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  collunBox: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
  },

  pinkBox: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  orangeBox: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  footerBox: {
    height: 90,
    flexDirection: "row",
    gap: 8,
  },

  redBox: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  tealBox: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  purpleBox: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});