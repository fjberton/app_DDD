import { StyleSheet, Text, View } from "react-native";





const CardCidade = ({nome, uf }) => {
    return(
        <View style={style.card}>
            <Text style={style.cidade}>{nome}</Text>
            <Text> -- </Text>
            <Text style={style.uf}>{uf}</Text>
        </View>
    );
};

export default CardCidade;

const style = StyleSheet.create({
    card: {
        width: 'auto',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgrondColor: '#737373',
        borderBottomstyle: "solid",
        borderBottomWidth: 0.3,
        borderBottomColor: '#FFFF'
    },
    cidade: {
        fontSize: 18,
        color: '#FFFF',
        fontWeight: '600',
    },
    uf: {
        fontSize: 18,
        color: '#2fb4b4',
        fontWeight: '900',
    },
});