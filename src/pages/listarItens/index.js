import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import CardItem from './components/cardItem';

export default class ListarItens extends Component {

    state = {
        data : '',
    }

    renderListItem = ( item ) => (
        <CardItem item={item} updateParentState={this.updateState.bind(this)}/>
    )

    updateState (data) {
        this.setState({data : data});
    }

    render() {
        const { navigation } = this.props;
        const dados1 = navigation.getParam('item');
        return (
            <ScrollView>
            <FlatList
                data={dados1}
                extraData={this.state}
                keyExtractor={item => String(item.dados)}
                renderItem={item => this.renderListItem(item)}
            />
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => {console.tron.log( this.state.data)}}>
                    <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            </ScrollView>

        );
        }
    }