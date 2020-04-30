import React from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'
import { useSelector } from 'react-redux'


const ProductDetialsScreen = props => {
    const productId = props.navigation.getParam('productId')
    const productTItle = props.navigation.getParam('productTitle')
    const selectedProducts = useSelector(state => state.products.availableProducts.find(item => item.id === productId))
    console.log(selectedProducts)
    return (
        <View>
            <Text> {productTItle}</Text>
        </View>
    )
}

ProductDetialsScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({

})

export default ProductDetialsScreen