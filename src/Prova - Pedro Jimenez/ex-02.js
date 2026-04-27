import { View, StyleSheet, Text } from "react-native";

export default function Exercicio02() {
  return (
    <View style={styles.container}>

      <View style={styles.headerBox}>
        <Text style={styles.text}>Header</Text>
      </View>

      <View style={styles.bodyBox}>

        <View style={styles.sidebarBox}>
          <Text style={styles.text}>Sidebar</Text>
        </View>

        <View style={styles.mainBox}>

          <View style={styles.topBox}>
            <View style={[styles.cardBox, styles.greenBox]}>
              <Text style={styles.text}>Verde</Text>
            </View>
            <View style={[styles.cardBox, styles.blueBox]}>
              <Text style={styles.text}>Azul</Text>
            </View>
          </View>


          <View style={styles.dividerBox} />


          <View style={styles.bottomBox}>
            <View style={[styles.cardBox, styles.redBox, { flex: 1 }]}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={[styles.cardBox, styles.orangeBox, { flex: 2 }]}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={[styles.cardBox, styles.purpleBox, { flex: 1 }]}>
              <Text style={styles.text}>1</Text>
            </View>
          </View>

        </View>
      </View>

      <View style={styles.footerBox}>
        <Text style={styles.text}>Footer</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 8,
    gap: 8,
  },

  headerBox: {
    height: 60,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
  },

  footerBox: {
    height: 50,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
  },

  bodyBox: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  sidebarBox: {
    width: 80,
    backgroundColor: "#95a5a6",
    justifyContent: "center",
    alignItems: "center",
  },

  mainBox: {
    flex: 1,
    gap: 8,
  },

  topBox: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  bottomBox: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  cardBox: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  dividerBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#34495e",
    alignSelf: "center",
  },

  greenBox: {
    backgroundColor: "green",
  },

  blueBox: {
    backgroundColor: "blue",
  },

  redBox: {
    backgroundColor: "red",
  },

  orangeBox: {
    backgroundColor: "orange",
  },

  purpleBox: {
    backgroundColor: "purple",
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});