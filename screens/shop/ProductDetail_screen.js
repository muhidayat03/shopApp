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
import Colors from '../../constants/Colors'


const ProductDetialsScreen = props => {
    const productId = props.navigation.getParam('productId')
    const productTItle = props.navigation.getParam('productTitle')
    const selectedProducts = useSelector(state => state.products.availableProducts.find(item => item.id === productId))
    console.log(selectedProducts)
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProducts.imageUrl }} />
            <View style={styles.actions}>
                <Button color={Colors.primary} title='Add to Cart' onPress={(props.onViewDetail)}></Button>
            </View>
            <Text style={styles.price}>${selectedProducts.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProducts.description}</Text>
        </ScrollView>
    )
}

ProductDetialsScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: "100%"
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    },
    actions: {
        alignItems: 'center',
        marginVertical: 10
    }

})

export default ProductDetialsScreen