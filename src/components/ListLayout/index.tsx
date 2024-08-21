import { Text } from "react-native";

type Props = {
    color: string;
    name: string;
    numeros: number
}

export default function ListLayout({color,name,numeros}:Props){
    return (
    <>
       <Text style={{color:color}}>
         (${name})
       </Text>
        <Text>
            (${numeros})
        </Text>
    </>
       
    )
   }