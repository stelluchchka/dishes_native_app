import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { axiosInstance } from '../API';
import { setDishes } from '../store/DishSlice';
import DishCard from '../components/DishCard';


export default function MainScreen({ navigation }) {
    const dispatch = useDispatch();
    const { dishes } = useSelector((store) => store.dish);

    useEffect(() => {
        async function getAllDishes() {
            await axiosInstance.get('/dishes').then((response) => dispatch(setDishes(response?.data.dishes)));
        }
        getAllDishes();
    }, [dispatch]);
    return (
    <ScrollView>
        <View style={styles.page}>
            {!!dishes &&
                dishes.map((dish) => <DishCard key={dish.id} {...dish} navigation={navigation} />)}
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});