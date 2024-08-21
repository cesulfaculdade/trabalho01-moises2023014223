import { FlatList, Image, ImageComponent, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import Feather from '@expo/vector-icons/Feather';
import ListLayout from "../components/ListLayout";
import DefaultImage from '../images/shopping_list.png';

const EMPTYLIST_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

export function Home() {
    const [products, setProducts] = useState<string[]>([]);
    const [productName, setProductName] = useState("");
    return (

        <View style={styles.container}>
            <Header></Header>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova produto"
                    placeholderTextColor='#BDBABA'
                    keyboardType="default"
                    onChangeText={setProductName}
                    value={productName}
                />
                <TouchableOpacity
                    style={styles.inputButton}
                >
                    <Feather style={styles.textButton} name="plus-circle" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerText}>
                <ListLayout
                    name={"Produtos"}
                    color="#31C667"
                    numeros={0}
                />

                <ListLayout
                    name={"Finalizados"}
                    color="#7A4A9E"
                    numeros={0}
                />
            </View>
            <FlatList
                data={products}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Text>teste</Text>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={products.length <= 0 && styles.list}
                ListEmptyComponent={()=>(
                    <View style={styles.containerEmptyList}>
                        <Image
                        style={styles.tinyImage}
                        source={{uri: EMPTYLIST_IMAGE}}
                        />
                    </View>
                ) }
                
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",

    },
    input: {
        padding: 16,
        textAlign: "center",
        borderRadius: 6,
        borderColor: "#808080",
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: "#F2F2F2",
        width: "90%"
    },
    inputButton: {
        borderRadius: 6,
        backgroundColor: "#31C667",
        height: 52,
        width: 52,
        marginLeft: 4
    },
    textButton: {
        margin: "auto",
        color: "#fff"
    },
    containerInput: {
        justifyContent: "center",
        flexDirection: 'row',
        height: 54,
        paddingLeft: 24,
        paddingRight: 24,
        top: -30
    },
    containerText: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%",
        marginBottom:20
    },
    emptyText:{
        backgroundColor:"red"
    },
    tinyImage: {
        width: 56,
        height: 56,
    },
    containerEmptyList:{
        flex:1,
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        gap:16,
        alignSelf:"stretch",
        borderTopColor:"#D9D9D9",
        borderTopWidth:1
    }
})

