import React from "react";
import { View, StyleSheet } from "react-native";

export default function Prova02() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.body}>
        <View style={styles.sidebar} />

        <View style={styles.mainArea}>
          <View style={styles.topSection}>
            <View style={[styles.card, styles.green]} />
            <View style={[styles.card, styles.blue]} />
          </View>

          <View style={styles.divisor} />

          <View style={styles.bottomSection}>
            <View style={[styles.card, styles.red, { flex: 1 }]} />
            <View style={[styles.card, styles.orange, { flex: 2 }]} />
            <View style={[styles.card, styles.purple, { flex: 1 }]} />
          </View>
        </View>
      </View>

      <View style={styles.footer} />
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

  header: {
    height: 60,
    backgroundColor: "#2c3e50",
    borderRadius: 8,
  },

  body: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  sidebar: {
    width: 80,
    backgroundColor: "#95a5a6",
    borderRadius: 8,
  },

  mainArea: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
  },

  topSection: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  divisor: {
    height: 8,
    backgroundColor: "#34495e",
    borderRadius: 8,
  },

  bottomSection: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  footer: {
    height: 50,
    backgroundColor: "#2c3e50",
    borderRadius: 8,
  },

  card: {
    flex: 1,
    borderRadius: 8,
  },

  green: {
    backgroundColor: "#2ecc71",
  },

  blue: {
    backgroundColor: "#3498db",
  },

  red: {
    backgroundColor: "#e74c3c",
  },

  orange: {
    backgroundColor: "#f39c12",
  },

  purple: {
    backgroundColor: "#9b59b6",
  },
});