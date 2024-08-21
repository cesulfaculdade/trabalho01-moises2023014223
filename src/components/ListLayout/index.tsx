import { Text, View } from "react-native";
import { style } from "./style"

type Props = {
    color: string;
    name: string;
    numeros: number
}

export default function ListLayout({ color, name, numeros }: Props) {
    return (
        <View style={{ flexDirection: "row", height: 19 }} >
            <Text style={{ color: color, fontWeight: "bold" }}>
                {name}
            </Text>
            <View style={{
                backgroundColor: "#D9D9D9",
                borderCurve:"circular",
                borderRadius:30,
                marginLeft: 10,
                height: 19,
                width: 25,
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
            }}>
                <Text style={{ }}>
                    {numeros}
                </Text>
            </View>
        </View>

    )
}