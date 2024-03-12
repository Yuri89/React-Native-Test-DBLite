import styled from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useUserRepository } from "../../database/useUserRepository";

export const Card = styled.View`
    padding: 10px;
    background-color: #555;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
`

export const CardText = styled.Text`
    color: aliceblue;
    font-size: 20px;
`

type CardScrollProps = {
    id:string
    nome: string;
    email: string;
    senha: string;
}

type IdSearch = {
    id: string;
}

export function CardScroll(props: CardScrollProps) {

    const users = useUserRepository()
    

    function DeletarUser(userId:IdSearch){
        try{
        users.deleted(userId)
        console.log("usuario deletado")
        }catch(error){
            console.log("erro ao deletar usuario"+error)
        }
    }

    return (
        <Card>
            <View>
                <CardText>Nome: {props.nome}</CardText>
                <CardText>Email: {props.email}</CardText>
                <CardText>Senha: {props.senha}</CardText>
            </View>

            <View>
                <TouchableOpacity onPress={() => DeletarUser({ id: props.id })}>
                <AntDesign name="delete" size={24} color="white"/>
                </TouchableOpacity>
            </View>
        </Card>
    )
} 