import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ececf3',
        padding: metrics.basePadding * 2,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    title: {
        textAlign: 'center',
        color: colors.darker,
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        marginTop: metrics.baseMargin,
        fontSize: 14,
        color: colors.darker,
        lineHeight: 21,
    },
    error: {
        color: colors.danger,
        textAlign: 'center',
        marginTop: metrics.marginTop,
    },
    form: {
        marginTop: metrics.baseMargin * 2,
    },
    input: {
        marginBottom: 10 ,
        backgroundColor: "#ffffff",
        borderWidth: 0.5,
        borderColor: colors.light ,
        borderRadius: metrics.baseRadius,
        height: 44,
        paddingHorizontal: metrics.basePadding,
        elevation:2,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "#ececf3",
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    button: {
        // backgroundColor: colors.primary,
        backgroundColor: "#faeb6a",
        borderRadius: metrics.baseRadius,
        height: 44,
        marginTop: metrics.baseMargin,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:2,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "#ececf3",
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    buttonText: {
        color: colors.darker,
        fontWeight: 'bold',
        fontSize: 14,
    },
    contentImage: {
        justifyContent: 'center',
        alignItems:'center',
        top: -10,
        left: 10,
    },
    img: {
        width: 150,
        height: 150,
    }
    

});

export default style;