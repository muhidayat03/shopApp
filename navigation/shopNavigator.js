import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import ProductOverviewScreen from '../screens/shop/ProductOverview_screen'
import Colors from '../constants/Colors'


const ProductNavigator = createStackNavigator({
    ProductOverview: ProductOverviewScreen
}, {
    defaultNavigationOptions: {
        headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: '#FF0066' }} />
        ),
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})


export default createAppContainer(ProductNavigator)