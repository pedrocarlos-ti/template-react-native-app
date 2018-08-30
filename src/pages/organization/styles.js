import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteTransparent,
        justifyContent: "center",
        alignItems: 'center',
    },
    box:{
        justifyContent: 'center',
        alignContent: 'center',
        top: -75,
    },
    image: {
        width: 125,
        height: 125,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.darkTransparent,
        marginTop: 25,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default style;
