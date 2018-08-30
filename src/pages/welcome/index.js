import React, { Component } from 'react';
//React Navigation
import { NavigationActions } from 'react-navigation';
//Importar PropTypes
import PropTypes from 'prop-types';
//Importando o Serviço Http
import api from '../../services/api';


import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Image,
    ActivityIndicator, //Loading de tela
    AsyncStorage //Banco de dados local
} from 'react-native';

import styles from './styles';

export default class Welcome extends Component {
    static navigationOptions = {
        header: null,
    };
    
    static propTypes = {
        navigation: PropTypes.shape({
            dispatch: PropTypes.func,
        }).isRequired
    };

    state = {
        username: '',
        password: '',
        name: '',
        rca: '',
        loading: false,
        errorMessage: null,
    };

    checkUserExists = async (username, password) => {
        // const user = await api.post('/auth/', {
        //     user : username,
        //     password : password
        // });

        const user = {
            nome: 'usuario',
            rca: 'rca'
        }
        console.tron.log(user.data.userName);
        console.tron.log(user.data.rca);
        this.setState({name: user.nome, rca: String(user.rca)});
        return user;
    }

    saveUser = async (username) => {
        await AsyncStorage.setItem('@pneubrasApp:username', username);
        await AsyncStorage.setItem('@pneubrasApp:name', this.state.name);
        await AsyncStorage.setItem('@pneubrasApp:rca', this.state.rca);
    };

    signIn = async () => {
        const { username, password } = this.state;

        if (username.length === 0 || password.length === 0 ) return;
        
        this.setState({loading: true});

        try {
           // await this.checkUserExists(username, password);
            await this.saveUser(username);

            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'User'})
                ]
            });
            
            this.props.navigation.dispatch(resetAction);
        } catch (err) {
            //erro
            this.setState({ loading: false, errorMessage: 'Usuário não existe'});
        }

    };

    render() {
        return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.contentImage}>
                <Image style={styles.img} source={require('../../assets/logo.png')} />
            </View>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.text}>
                Para continuar, precisamos que você informe seu usuário e senha 
            </Text>

            { !!this.state.errorMessage
              && <Text style={styles.error}>{this.state.errorMessage}</Text> }
            
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorect={false}
                    placeholder="Digite seu usuário"
                    value={this.state.username}
                    onChangeText={username => this.setState({username})}
                />
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorect={false}
                    placeholder="Digite sua senha"
                    value={this.state.password}
                    secureTextEntry={true} 
                    onChangeText={password => this.setState({password})}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.signIn}>
                    {this.state.loading ? <ActivityIndicator size="small" color="#FFF" />
                     : <Text style={styles.buttonText}>Prosseguir</Text> 
                    }
                </TouchableOpacity>
            </View>
         </View>
        );
    }
}