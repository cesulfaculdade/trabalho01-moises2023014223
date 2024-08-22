import { Text, View } from "react-native";
import {style} from "./style"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';


type Props = {
    name: string;
    removeItem: ()=>void
}

export default function ListLayout({  name, removeItem}: Props) {
    return (
        <View style={style.container} >
            <AntDesign name="checkcircle" size={24} color="#7A4A9E" />
            <Text style={style.text}>
                {name}
            </Text>
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="black" onPress={removeItem}/>
        </View>

    )
}