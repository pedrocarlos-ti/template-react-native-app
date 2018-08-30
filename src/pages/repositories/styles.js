import { StyleSheet } from 'react-native';
import { metrics, colors, general } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        ...general.box,
        margin: metrics.baseMargin,
    },
    noSales: {
        textAlign: 'center',
    },
    loading: {
        marginTop: metrics.basePadding,
    },
    loadingAPI: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F5FCFF88",
    }

});

export default styles;