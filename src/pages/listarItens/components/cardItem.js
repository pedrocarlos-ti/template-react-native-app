import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class CardItem extends Component {

    state = {
        margem: 0,
        PVENDA: 0,
        calculo : 0,
        novoPreco: 0,

    }

    updateParentState(data) {
        this.props.updateParentState(data);
    }

    render(){
        const dados = this.props.item.item;
        const price = dados.PVENDA; 
        //dados.PVENDA = this.state.margem;

        return (
            console.tron.log(this.props.item),
            <View style={styles.container}>

                <View style={styles.info}>
                    <Icon name={"usd"} size={14} style={styles.infoIcon} />
                    <Text style={styles.infoText}>{dados.CODPROD}</Text>
                </View>

                <View style={styles.date}>
                    <Icon name={"shopping-basket"} size={12} style={styles.infoIcon} />
                    <Text style={styles.infoText}>{dados.DESCRICAO}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Icon name={"usd"} size={14} style={styles.infoIcon} />
                        <Text style={styles.infoText}>{price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.info}>
                        <Icon name={"shopping-basket"} size={14} style={styles.infoIcon} />
                        <Text style={styles.infoText}>{dados.QT}</Text>
                    </View>                
                    <View style={styles.info}>
                        <Icon name={"truck"} size={14} style={styles.infoIcon} />
                        <Text style={styles.infoText}>{dados.VLCUSTOFIN.toFixed(2)}</Text>
                    </View>                
                        {
                             this.state.novoPreco > 10 ?
                            <View style={styles.info}><Icon name={"thumbs-up"} size={14} style={styles.margemOK} /><Text style={styles.infoText} onPress={() => { this.updateParentState({data: this.props })}} >Margem Positiva</Text></View>
                            :
                            <View style={styles.info}><Icon name={"thumbs-up"} size={14} style={styles.margemNotOK} /><Text style={styles.infoText} onPress={() => { this.updateParentState({data: this.props })}} >Margem</Text></View>
                        }
                </View>
                    <View style={styles.info}>
                        <Icon name={"truck"} size={14} style={styles.infoIcon} />
                        <Text style={styles.infoText}>Margem Anterior:  {((dados.PVENDA - dados.VLCUSTOFIN ) / dados.PVENDA * 100).toFixed(2)}</Text>
                    </View> 
                    <View style={styles.info}>
                        <Icon name={"truck"} size={14} style={styles.infoIcon} />
                        <Text style={styles.infoText}>Margem Atual:  {this.state.novoPreco.toFixed(2)}</Text>
                    </View> 

                 <View style={styles.change}>
                <Text>Informe o novo valor:</Text>

                <TextInput style={styles.changePrice}
                           value={dados.PVENDA}
                           autoCapitalize="none"
                           keyboardType="numeric"
                           onChangeText={
                               (margem) => {
                                   this.setState({margem : margem, novoPreco: ((margem - dados.VLCUSTOFIN ) / margem * 100)})
                                }
                            }
                ></TextInput>

                <TouchableOpacity 
                    style={styles.button} 
                    value={this.state.novoPreco}
                    onPress={() => {
                        alert(this.state.novoPreco.toFixed(2))}}
                        //console.tron.log( this.state.novoPreco.toFixed(2))}}
                        >
                        <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>

            </View>
        </View>
        )
    }
}