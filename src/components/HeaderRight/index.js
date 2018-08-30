import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

//React Navigation
import { NavigationActions } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class HeaderRight extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            dispatch: PropTypes.func,
        }).isRequired,
    }

    signOut = async () => {
        //Deslogar o usuário
        await AsyncStorage.clear();

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Welcome'})
            ]
        });
        
        this.props.navigation.dispatch(resetAction);

    }

    render() {
        return (
            <TouchableOpacity onPress={this.signOut}>
                <Icon name="sign-out" size={20} style={styles.icon}/>
            </TouchableOpacity>
        );  
    }
}
