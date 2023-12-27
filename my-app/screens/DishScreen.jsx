import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../API';
import { resetDish, setDish } from '../store/DishSlice';
import Header from '../components/Header';


export default function DishScreen({ route }) {
    const { id } = route.params;
    const dispatch = useDispatch();
    const { dish } = useSelector((store) => store.dish);
    useEffect(() => {
        async function getOneDish() {
            await axiosInstance.get(`/dishes/${id}`).then((response) => dispatch(setDish(response?.data)));
        }
        getOneDish();
        return () => {
            dispatch(resetDish());
        };
    }, [dispatch]);
    return (
        <View style={styles.container}>
              <FlatList
                ListHeaderComponent={<Header />}
                stickyHeaderIndices={[0]}
            />

            <View style={styles.contentContainer}>
                <View style={styles.dishContainer}>
                    <Text style={styles.dishTitle}>{dish.title}</Text>
                    <Image 
                        style={styles.dishImage} 
                        source={{ uri: dish.url ? 'http://172.20.10.4' + dish.url.slice(16) : undefined }}
                        resizeMode='contain'
                        />
                    <View style={styles.chefSection}>
                    <Image 
                        style={styles.chefImage} 
                        source={{ uri: dish.chef_url ? 'http://172.20.10.4' + dish.chef_url.slice(16) : undefined }}
                        resizeMode='contain'
                        />
                        <View>
                            <Text style={styles.chefName}>{dish.chef_name}</Text>
                            <Text style={styles.chefPost}>{dish.chef_post}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailsContainer}>
                    <View style={styles.detailSection}>
                        <Text style={styles.detailLabel}>ВЕС, Г</Text>
                        <Text style={styles.detailValue}>{dish.weight}</Text>
                    </View>
                    <View style={styles.separator}></View>

                    <View style={styles.detailSection}>
                        <Text style={styles.detailLabel}>ЦЕНА, $</Text>
                        <Text style={styles.detailValue}>{dish.price}</Text>
                    </View>
                    <View style={styles.separator}></View>

                    <View style={styles.detailSection}>
                        <Text style={styles.detailLabel}>ЭНЕРГЕТИЧЕСКАЯ ЦЕННОСТЬ, ККАЛ/100 Г</Text>
                        <Text style={styles.detailValue}>{dish.energy_value}</Text>
                    </View>
                    <View style={styles.separator}></View>

                    <Text style={styles.detailLabel}>СРОК ГОДНОСТИ</Text>
                    <View style={styles.smallSeparator}></View>
                    <Text style={styles.detailLabel}>{dish.expiry_date}</Text>
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.detailLabel}>СОСТАВ</Text>
                    <View style={styles.smallSeparator}></View>
                    <Text style={styles.detailLabel}>{dish.content}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBAF00',
    },
    header: {
        backgroundColor: '#FBAF00',
        padding: 10,
        alignItems: 'center',
    },
    logo: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 24,
    },
    headerTitle: {
        color: '#fff',
        fontWeight: '900',
        textAlign: 'center',
        textShadowColor: '#fff',
        textShadowRadius: 3,
    },
    contentContainer: {
        // flex: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dishContainer: {
        width: '80%',
        padding: 10,
        alignItems: 'center',
    },
    dishTitle: {
        fontWeight: '600',
        fontSize: 25,
        color: '#FBAF00',
        color: 'black',
    },
    dishImage: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 15,
        marginVertical: 30,
    },
    chefSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chefImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 10,
    },
    chefName: {
        fontStyle: 'italic',
        fontSize: 18,
        fontWeight: '200',
    },
    chefPost: {
        fontStyle: 'italic',
        fontSize: 18,
        fontWeight: '200',
    },
    detailsContainer: {
        width: '80%',
        marginTop: 30,
    },
    detailSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailLabel: {
        fontSize: 15,
        fontWeight: '500',
        color: '#3c3a3a',
    },
    detailValue: {
        fontSize: 16,
        fontWeight: '800',
        color: 'black',
    },
    separator: {
        height: 1,
        backgroundColor: '#FBAF00',
        marginVertical: 10,
    },
    smallSeparator: {
        height: 1,
        backgroundColor: '#635f5f',
        marginVertical: 1,
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
    },
    // Add additional styles as needed
});