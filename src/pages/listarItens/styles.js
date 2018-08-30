import { StyleSheet } from 'react-native';
import { general, metrics, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        ...general.box,
        marginHorizontal: metrics.basePadding,
        marginTop: metrics.baseMargin,
    },

    repoTitle: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: metrics.baseMargin,
    },
    info: {
        flexDirection: 'row',
        marginRight: metrics.baseMargin,
        alignItems: 'center',
    },
    date: {
        flexDirection: 'row',
        marginRight: metrics.baseMargin,
        marginBottom: 8,
        alignItems: 'center',
    },
    infoIcon: {
        color: colors.dark,
    },
    infoText: {
        color: colors.dark,
        fontSize: 12,
        marginLeft: metrics.baseMargin / 2,
    },
    change: {
        marginTop: 10,
    },
    changePrice: {
        backgroundColor: "#f3f3f3",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#d1d1d1",
        height: 35,
        marginTop: 10,
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
        marginLeft: 20,
        marginRight: 20,
    },
    buttonText: {
        color: colors.darker,
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default styles;