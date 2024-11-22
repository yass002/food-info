import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';

const Restaurents = [
    {
        id: '1',
        name: 'Dar el jeld',
        description: 'Enjoy an exceptional culinary experience with refined dishes crafted by expert chefs in an elegant setting.',
        image: 'https://img.freepik.com/photos-gratuite/restaurant-interieur_1127-3394.jpg',
    },
    {
        id: '2',
        name: 'KFC',
        description: 'Savor simple and delicious cuisine in a warm atmosphere, perfect for moments with friends or family.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipP_U90BZ8IY_doKGu_lop0H1Wplwq1nc2u90wEg=s1360-w1360-h1020',
    },
    {
        id: '3',
        name: 'ELHAJ',
        description: 'Immerse yourself in a unique Kafteji  with creative decor and dishes inspired by global flavors.',
        image: 'https://tunisie.co/uploads/images/content/fatoum-081220-1.jpg',
    },
    // Add more pizzas as needed
];

const Menu = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Button title="See more details" onPress={() => alert(`Details  hounyy .. ${item.name}`)} />
        </View>
    );

    return (
        <FlatList
            data={Restaurents}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default Menu;