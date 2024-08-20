import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import { useState } from "react";

export function Home() {
    const [products,setProducts] = useState<string[]>([]);
    const [productName,setProductName] = useState("");
    return (

        <View style={styles.container}>
            <Header></Header>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Produto"
                    placeholderTextColor='#BDBABA'
                    keyboardType="default"
                    onChangeText={setProductName}
                    value={productName}
                />
                <TouchableOpacity
                    style={styles.inputButton}
                    >
                    <Text style={styles.textButton}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },
    input: {
        padding: 16,
        textAlign: "center",
        borderRadius: 6,
        borderColor: "#808080",
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: "#F2F2F2",
        width:"100%"
    },
    inputButton: {
        borderRadius: 6,
        backgroundColor: "#31C667",
        height:52,
        width: 52
    },
    textButton:{
        margin:"auto",
        color:"#fff"
    },
    containerInput:{
        justifyContent:"center",
        flexDirection: 'row',
        height: 54,
        paddingLeft: 24,
        paddingRight: 24,
    }
})

