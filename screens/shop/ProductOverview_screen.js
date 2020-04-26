import React from 'react'
import { Text } from 'react-native'
import { FlatList, ClippingRectangle } from 'react-native'
import { useSelector } from 'react-redux'

const ProductOverviewScreen = props => {

    const products = useSelector(state => state.products.availableProducts)
    console.log('asdfasdfasdf', products)
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <Text>{itemData.item.title}</Text>} />
    )
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: "All Product"
}

export default ProductOverviewScreen

