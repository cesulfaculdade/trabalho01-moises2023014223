import { StyleSheet, View } from "react-native";
import Header from "../components/Header";


export function Home() {
    return(
  <View style={styles.container}>
    <Header></Header>

  </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#f2f2f2"
    }
})

