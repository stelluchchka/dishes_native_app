import { ScrollView, View, Text, FlatList, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../API';
import { setDishes } from '../store/DishSlice';
import DishCard from '../components/DishCard';
import Header from '../components/Header';


export default function MainScreen({ navigation }) {
    const dispatch = useDispatch();
    const { dishes } = useSelector((store) => store.dish);

    const [titleValue, setTitleValue] = useState('');
    async function getAllDishes() {
        const url = `/dishes?title=${titleValue}`
        await axiosInstance.get(url).then((response) => dispatch(setDishes(response?.data.dishes)));

        try {
            await axiosInstance.get(url).then((response) => dispatch(setDishes(response?.data.dishes)));
            setTimeout(getAllDishes, 1000)
        } catch (error) {
            console.log('Ошибка:', error);   
        }
    }

    useEffect(() => {
        getAllDishes();
    }, [dispatch]);

    const handleTitleValueChange = (text) => {
        setTitleValue(text);
      };
    
      const handleSearchButtonClick = () => {
        getAllDishes();
      };


    return (
    <View style={styles.page}>
    <FlatList
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={[0]}
      />
    <ScrollView>
        <View style={styles.cards}>
        <View style={styles.search}>
            <TextInput
                onChangeText={handleTitleValueChange}
                placeholder="название блюда.."
                style={styles.placeholder}/>
            <TouchableOpacity
                onPress={handleSearchButtonClick}
                style={styles.button}>
                <Text style={{ color: 'white', fontSize: 15 }}>Поиск</Text>
            </TouchableOpacity>
        </View>
            {!!dishes &&
                dishes.map((dish) => <DishCard key={dish.id} {...dish} navigation={navigation} />)}            
        </View>


    </ScrollView> 
   </View>

    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FBAF00'
    },
    cards: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBAF00'
    },
    search: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#f53100',
        height: 30,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    placeholder: {
        backgroundColor: 'rgb(231, 230, 230)',
        height: 30,
        width: 270,
        fontSize: 18,
        borderRadius: 10,
        marginRight: 5,
    }
});