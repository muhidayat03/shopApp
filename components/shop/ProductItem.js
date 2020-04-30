import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Button,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native'
import Colors from '../../constants/Colors'

const ProductItem = props => {

    let TouchableComponent = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback
    }
    return (
        <TouchableComponent onPress={(props.onViewDetail)} useForeground>
            <View style={styles.product}>
                <Image style={styles.image} source={{ uri: props.image }} />
                <View style={styles.details}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                </View>
                <View style={styles.actions}>
                    <Button color={Colors.primary} title='View Details' onPress={(props.onViewDetail)}></Button>
                    <Button color={Colors.primary} title='To Cart' onPress={props.onAddToCart}></Button>
                </View>
            </View>
        </TouchableComponent >
    )
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '60%'

    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '25%',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    }
})

export default ProductItem
