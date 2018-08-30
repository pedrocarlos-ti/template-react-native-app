import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, AsyncStorage, ActivityIndicator, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';

import api from '../../services/api';
import styles from './styles';

import RepositoryItem from './components/RepositoryItem';

export default class Repositories extends Component {
    
    static navigationOptions = () => ({
        //header: null,
        title: 'Vendas',
        tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={24} color={tintColor}/>
    });

    state = {
        data: [],
        loading: true,
        refreshing: false,
        haveSales: true,
        loadingAPI: false,
    }

    componentDidMount() {
        this.loadPedidos();
    };

    loadPedidos = async () => {
        this.setState({ refreshing: true });
        
        try {
            const rca = await AsyncStorage.getItem('@pneubrasApp:rca');
            const response = await api.post('/pedidos', {
                RCA: rca
            });
            
            this.setState({data: response.data, loading: false, refreshing: false});
        } catch (error) {
           this.setState({loading: false, refreshing: false, haveSales: false});
        }
        
    };

    loadItens = async (pedido) => {
        try {
            const itens = await api.post('/detalhe-pedido',{
                pedido: pedido
            });
            this.setState({loadingAPI: true});
           // console.tron.log(itens);

            setTimeout(() => {
                this.setState({loadingAPI: false});

                this.props.navigation.navigate('ListarItens', {item: itens.data});
            }, 500);
            //console.tron.log(pedido)
            
        } catch (error) {
            ToastAndroid.showWithGravity(
                'Não foi possivel carregar os dados, verifique sua conexão com a internet',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
              );
        }
    };

    renderListItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{
            this.setState({loadingAPI: true})
            console.tron.log(item.NUMPED);
            this.loadItens(item.NUMPED);
        }}>
            <RepositoryItem repository={item} />
        </TouchableOpacity>
    )

    renderList = () => (

        <FlatList
            data={this.state.data}
            keyExtractor={item => String(item.NUMPED)}
            renderItem={this.renderListItem}
            onRefresh={this.loadPedidos}
            refreshing={this.state.refreshing}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.haveSales
                    ?  null
                    :<View style={styles.box}> 
                        <Text style={styles.noSales}>Sem pedidos disponíveis.</Text> 
                    </View>
                }

                { this.state.loading
                  ? <ActivityIndicator style={styles.loading} />
                  : this.renderList()
                }
                {
                  this.state.loadingAPI ?  <View style={styles.loadingAPI}>
                                                <ActivityIndicator size='large' />
                                                <Text>Carregando pedido</Text>
                                            </View>
                                        : null
                }
            </View>
        )
    }
}