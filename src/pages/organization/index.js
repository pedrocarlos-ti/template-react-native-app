import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Image, AsyncStorage, Modal } from 'react-native';

import style from './styles';

export default class Organization extends Component {
  
    state = {
        name: '',
        rca:'',
    };

    static navigationOptions = {
        //header: null,
        title: 'Informações',
        tabBarIcon: ({ tintColor }) => <Icon name="building" size={24} color={tintColor}/>
    };

    async componentDidMount() {
        this.setState({
            name : await AsyncStorage.getItem('@pneubrasApp:name'),
            rca  : await AsyncStorage.getItem('@pneubrasApp:rca'),
        })
    }

    render() {
        return (
            <View style={style.container}> 
                <View style={style.box}>
                    <Image source={require('../../assets/user.png')} style={style.image}/>
                </View>
                <View style={style.box}>
                    <Text style={style.text}>Vendedor: {this.state.name}</Text>
                    <Text style={style.text}>RCA: {this.state.rca}</Text>
                </View>
            </View>
        )
    }
    
}
