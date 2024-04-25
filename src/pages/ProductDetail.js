import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView, Image, StyleSheet, TouchableOpacity
}
    from 'react-native';
import {useCart} from "../utils/CartContext";
import Icon from "react-native-vector-icons/FontAwesome";

const Product = ({ product, route, navigation }) => {
    const [Product, setProduct] = useState(product)
    useEffect(() => {
        const { product } = route.params;
        setProduct(product)
        navigation.setOptions({
            title: product?.title || "Détails",
        })
    }, [])
    const { addToCart, cartItems } = useCart();
    const handleAddToCart = () => {
        addToCart(Product);
    };

    const showIcons = () => {
        if(cartItems.find(product => product.id === Product.id)){
            return <View style={styles.addtoCart}><Text style={styles.addtoCartText}>Ajouté au panier</Text></View>
        } else {
            return <TouchableOpacity onPress={handleAddToCart} style={styles.addtoCart}><Text style={styles.addtoCartText}>Ajouter au panier</Text></TouchableOpacity>
        }
    }

    return(
        <View>
            <View style={styles.imageContainer}>
                <Image style={styles.imageProduct} source={{uri: Product?.image}} resizeMode="contain"/>
            </View>
            <Text style={styles.titleProduct}>{Product?.title}</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{Product?.price} €</Text>
                {showIcons()}
            </View>
            <Text style={styles.descProduct}>{Product?.description}</Text>
            <View style={styles.ratingProduct}>
                <Text style={styles.rateProduct}>{Product?.rating.rate}/5</Text>
                <Text>{Product?.rating.count} avis</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({

    imageProduct: {
        width: "100%",
        height: 300
    },

    imageContainer: {
        backgroundColor: "white",
        padding: 8,
        marginBottom: 16
    },

    titleProduct: {
        textAlign: "center",
        fontWeight: "bold"
    },

    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 32
    },

    priceText: {
      fontSize: 24
    },

    descProduct: {
        margin: 32,
        textAlign: "justify",
        marginTop: 16
    },

    addtoCart: {
        backgroundColor: "black",
        borderRadius: 16
    },

    addtoCartText: {
        color: "white",
        padding: 16,
        fontWeight: "bold",
        fontSize: 16
    },

    ratingProduct: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 32
    },

    rateProduct: {
        fontWeight: "bold",
        fontSize: 16
    }
})

export default Product;