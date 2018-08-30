import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Moment from 'moment/min/moment-with-locales'

Moment.locale('pt-br');

const RepositoryItem = ({ repository }) => (
    <View style={styles.container}>
    
        <View style={styles.date}>
            <Icon name={"calendar"} size={12} style={styles.infoIcon} />
            <Text style={styles.infoText}>{Moment(repository.DATA).format('LLLL')}</Text>
        </View>
        <Text style={styles.repoTitle}>{repository.CLIENTE}</Text>
    
        <View style={styles.infoContainer}>
            <View style={styles.info}>
                <Icon name={"building"} size={12} style={styles.infoIcon} />
                <Text style={styles.infoText}>{repository.CODFILIAL}</Text>
            </View>
            <View style={styles.info}>
                <Icon name={"shopping-basket"} size={12} style={styles.infoIcon} />
                <Text style={styles.infoText}>{repository.NUMPED}</Text>
            </View>
            <View style={styles.info}>
                <Icon name={"user"} size={12} style={styles.infoIcon} />
                <Text style={styles.infoText}>{repository.CODCLI}</Text>
            </View>
            <View style={styles.info}>
                <Icon name={"usd"} size={12} style={styles.infoIcon} />
                <Text style={styles.infoText}>{repository.VLTOTAL.toFixed(2)}</Text>
            </View>
        </View>

    </View>
);

RepositoryItem.prototype = {
    repository: PropTypes.shape({
        CLIENTE: PropTypes.string,
        NUMPED: PropTypes.string,
        CODCLI: PropTypes.string,
        VLTOTAL: PropTypes.string,
    }).isRequired,
}

export default RepositoryItem;

