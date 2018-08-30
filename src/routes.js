//Importação das dependências do React
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

//Header
import HeaderRight from '../src/components/HeaderRight';

//Metricas
import { metrics, colors } from '../src/styles'

//Paginas
import Welcome from './pages/welcome'
import Repositories from './pages/repositories'
import Organization from './pages/organization'
import ListarItens  from './pages/listarItens'


const createNavigator = (isLogged = false ) =>
 StackNavigator({
    Welcome: { screen: Welcome},
    ListarItens: { screen: ListarItens},
    User: {
        screen: TabNavigator({
            Repositories: {screen: Repositories},  
            Organization: {screen: Organization},  
        }, {
            tabBarPosition: 'bottom',   
            tabBarOptions: {
                showIcon: true,
                showLabel: false,
                activeTintColor: colors.white,
                inactiveTintColor: colors.whiteTransparent,
                style: {
                    backgroundColor: colors.secondary,
                },
                upperCaseLabel: false,
                
              },
        })
    }
}, {
    initialRouteName: isLogged ? 'User' : 'Welcome' ,
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            paddingHorizontal: metrics.basePadding
        },
        headerRight: <HeaderRight navigation={navigation}/>
    })
});

export default createNavigator;