import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function DishCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Dish', { id: props.id });
    };

    return (
        <View style={styles.card} >
            <Image
                style={styles.image}
                source={{ uri: `http://192.168.1.111` + props.url.slice(16) }} 
                resizeMode='contain'
            />
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.title}>{ props.title }</Text> 
                    {/* <Text style={styles.tags}>{props.tags}</Text> */}
                </View>
                <Text style={styles.price}>{ props.price }$</Text>
                <Text style={styles.price}>приготовил: {props.chef_post}</Text>
            </View>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.button}>подробнее</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFD639',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        width: 320,
        margin: 8,
    },
    image: {
        width: '90%',
        aspectRatio: 1, 
        alignSelf: 'center'
    },
    container: {
        width: '80%',
        alignSelf: 'center',
    },
    container2: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'flex-start' 
    },
    title: {
        fontSize: 25, 
        fontWeight: '600',
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,
    },
    tags: {
        backgroundColor: '#f53100',
        color: 'white',
        fontWeight: '800',
        margin: 5,
        padding: 3,
        borderRadius: 5
    },
    price: {
        fontWeight: '800',
        color: '#3c3a3a',
        fontSize: 18,
        marginLeft: 2,
        marginTop: 0,
        marginBottom: 20,
    },
    chef: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        color: '#FBAF00',
        marginBottom: 10,
    },
    button: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#f53100',
        marginBottom: 10,
    }
});