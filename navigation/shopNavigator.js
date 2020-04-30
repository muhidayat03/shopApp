import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import ProductOverviewScreen from '../screens/shop/ProductOverview_screen'
import ProductDetailScreen from '../screens/shop/ProductDetail_screen'
import Colors from '../constants/Colors'


const ProductNavigator = createStackNavigator({
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen
}, {
    defaultNavigationOptions: {
        headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: Colors.primary }} />
        ),
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})


export default createAppContainer(ProductNavigator)