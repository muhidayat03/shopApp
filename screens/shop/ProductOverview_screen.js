import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'

const ProductOverviewScreen = props => {

    const products = useSelector(state => state.products.availableProducts)
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                <ProductItem
                    image={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    onViewDetail={() => {
                        props.navigation.navigate('ProductDetail', {
                            productId: item.id, 
                            productTitle: item.title
                        })
                    }}
                />
            }
        />
    )
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: "All Product"
}

export default ProductOverviewScreen

