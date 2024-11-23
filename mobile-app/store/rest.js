import { createSlice } from '@reduxjs/toolkit';

// store/rest.js

const restaurents = [
    {
        id: '1',
        name: 'Dar el jeld',
        description: 'Enjoy an exceptional culinary experience with refined dishes crafted by expert chefs in an elegant setting.',
        image: 'https://img.freepik.com/photos-gratuite/restaurant-interieur_1127-3394.jpg',
        latitude: 10.1815,
        longitude: 36.8065
    },
    {
        id: '2',
        name: 'KFC',
        description: 'Savor simple and delicious cuisine in a warm atmosphere, perfect for moments with friends or family.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipP_U90BZ8IY_doKGu_lop0H1Wplwq1nc2u90wEg=s1360-w1360-h1020',
        latitude: 36.8456, // Ajoutez des coordonnées valides
        longitude: 10.2108,
    },
    {
        id: '3',
        name: 'ELHAJ',
        description: 'Immerse yourself in a unique Kafteji  with creative decor and dishes inspired by global flavors.',
        image: 'https://tunisie.co/uploads/images/content/fatoum-081220-1.jpg',
        latitude: 36.8456, // Ajoutez des coordonnées valides
        longitude: 10.2508,
    },
{
        id: '4',
        name: 'El Ali',
        description: 'A blend of Tunisian traditions and modern touches in the heart of the Medina of Tunis.',
        image: 'https://1001tunisie.com/wp-content/uploads/2023/08/1691019651_77_Vie-nocturne-a-Tunis-%E2%80%93-Meilleurs-Bars-Cafes-Tunisie.jpg',
        latitude: 36.7983,
        longitude: 10.1713
    },
{
        id: '5',
        name: 'Le Golfe',
        description: 'Fine dining by the sea with a spectacular view and fresh seafood dishes.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/5b/3c/7a/caption.jpg?w=200&h=-1&s=1',
        latitude: 36.8577,
        longitude: 10.3322
    },
{
        id: '6',
        name: 'Chez Slah',
        description: 'A cozy place known for its excellent seafood and warm service.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNA4wpReLpS2zqcW5o3weoyAOPaLaHN-OtZoQ4b=s680-w680-h510',
        latitude: 36.8043,
        longitude: 10.1836
    },
{
        id: '7',
        name: 'Dar Zarrouk',
        description: 'A beautiful restaurant with an amazing view of the Gulf of Tunis.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipN_cmPF7YjMcFCOpq-QZ9iL7hJ2zZq3eOBKp-rl=s680-w680-h510',
        latitude: 36.8733,
        longitude: 10.3190
    },
{
        id: '8',
        name: 'Sidi Bou Said Café Restaurant',
        description: 'Charming spot in Sidi Bou Said offering traditional Tunisian meals.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPSzmf0arht2uQR62_VHAWabxUsRs-mZ3bYkxy0=s680-w680-h510',
        latitude: 36.8701,
        longitude: 10.3450
    },
{
        id: '9',
        name: 'La Closerie',
        description: 'A refined and trendy restaurant offering a mix of Mediterranean and Tunisian cuisine.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOMuRpYsC9R9Z-ledfeXEVX2K8tK_q1GvgVta8=s680-w680-h510',
        latitude: 36.8411,
        longitude: 10.2177
    },
{
        id: '10',
        name: 'Le Grand Bleu',
        description: 'Beachfront dining experience with delicious seafood specialties.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNjMK7k2Wmt0KFYCboVwDCvYSOq0Z1j7D4HscYt=s680-w680-h510',
        latitude: 36.8472,
        longitude: 10.3032
    },
{
        id: '11',
        name: 'Dar Hamouda Pacha',
        description: 'A delightful culinary journey in a beautifully restored traditional Tunisian house.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrabLzqoIAn8vveT2cacGRvFh-yw5VQ0vXA&s',
        latitude: 36.7991,
        longitude: 10.1689
    },
{
        id: '12',
        name: 'Café des Délices',
        description: 'A must-visit café with breathtaking views of the Gulf of Tunis.',
        image: 'https://www.sejours-tunisie.com/wp-content/uploads/2019/02/cafe-des-delices.jpg',
        latitude: 36.8691,
        longitude: 10.3445
    },
{
    id: '13',
    name: 'Dar Belhadj',
    description: 'A traditional Tunisian restaurant in the heart of the Medina, offering exquisite dishes in an authentic ambiance.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/da/4b/14/dar-belhadj.jpg?w=1200&h=-1&s=1',
    latitude: 36.8008,
    longitude: 10.1704
},
{
    id: '14',
    name: 'Le Pirate',
    description: 'Located near Monastir, famous for its fresh fish and seafood dishes served with a scenic view.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/e7/75/22/le-pirate.jpg?w=900&h=-1&s=1',
    latitude: 35.7656,
    longitude: 10.8191
},
{
    id: '15',
    name: 'La Falaise',
    description: 'A restaurant perched on a cliff in Mahdia, offering fresh seafood and stunning panoramic views.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPruQPNMz9-6IRDtLLu8wrJac6d_ha-O4P5-knK=s680-w680-h510',
    latitude: 35.5064,
    longitude: 11.0622
},
{
    id: '16',
    name: 'Dar Aicha',
    description: 'A hidden gem in Hammamet, blending Tunisian flavors with a cozy and traditional setting.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLWKRixChuq4cMS6H4M2Vwt2lL8TLlWWVvg&s',
    latitude: 36.4002,
    longitude: 10.6167
},
{
    id: '17',
    name: 'Le Barberousse',
    description: 'An iconic spot in Hammamet known for its seafood and romantic seaside terrace.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVrINhVRfOiaB6aKo1PSgDN0VsMsXaT_8zw&s',
    latitude: 36.3962,
    longitude: 10.6146
},
{
    id: '18',
    name: 'Chez Achour',
    description: 'A family-run restaurant in Hammamet, known for its traditional Tunisian cuisine and warm ambiance.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEyPP0bbUKWskj5kDWGFI3_5F_t6msmy5JA&s',
    latitude: 36.3947,
    longitude: 10.6083
},
{
    id: '19',
    name: 'El Mouradi Gammarth',
    description: 'A stylish restaurant offering a mix of Tunisian and international dishes near the Gammarth beach.',
    image: 'https://lh5.googleusercontent.com/p/AF1QipMpPjFuPuTkTI1ZUmRYh3S_6t2V-PSHDXp-2mbz=w243-h174-n-k-no-nu',
    latitude: 36.9111,
    longitude: 10.2789
},
{
    id: '20',
    name: 'La Medina',
    description: 'Located in the Yasmin Hammamet area, blending modern and traditional Tunisian cuisine.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDB30fDsTNYqa9T9n94xVtiOUeu1z1amhrDg&s',
    latitude: 36.3625,
    longitude: 10.5415
},
{
    id: '21',
    name: 'Le Carnot',
    description: 'An elegant restaurant in downtown Tunis offering classic dishes with a contemporary twist.',
    image: 'https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/326491726_834110951019935_6508989844214170282_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=lmYT1n-nNr4Q7kNvgFy51hH&_nc_zt=23&_nc_ht=scontent.ftun4-2.fna&_nc_gid=AqpyVUX9oYu4SvP7quU20_q&oh=00_AYADauyhoNvgX1eBv65AMp7g5vQ0OUe-6gabePMyRJSAoQ&oe=6746B78A',
    latitude: 36.8000,
    longitude: 10.1855
},
{
    id: '22',
    name: 'La Villa Didon',
    description: 'A chic and contemporary restaurant offering Mediterranean cuisine with a breathtaking view of Carthage.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOjPG40jl4Yt2IE0gipGF_Oxxmqp8VHemFdRh6u=s680-w680-h510',
    latitude: 36.8522,
    longitude: 10.3225
},
{
    id: '23',
    name: 'Dar Fatma',
    description: 'An elegant dining experience in the heart of Sidi Bou Said, blending tradition and modernity.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMLIu4kfGT1xyzFgcd-OYPYlgkmUpu7DPRvTft0=s680-w680-h510',
    latitude: 36.8703,
    longitude: 10.3458
},
{
    id: '24',
    name: 'Le Zink',
    description: 'A trendy restaurant in Lac 2 offering an array of international dishes with a Tunisian twist.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipM6Cy0E7XEFhTXpJHLEh5Ppbbvw0VCH9r2V_OMc=s680-w680-h510',
    latitude: 36.8458,
    longitude: 10.2314
},
{
    id: '25',
    name: 'Capitol',
    description: 'A sophisticated spot in downtown Tunis, known for its refined menu and elegant setting.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMAAZwX1okaLqLpdTTuOpuwzdlt5M5i5wkrAb0o=s680-w680-h510',
    latitude: 36.8023,
    longitude: 10.1758
},
{
    id: '26',
    name: 'Restaurant le 716',
    description: 'A modern venue in Gammarth serving a mix of traditional and international dishes.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMDUW157hL_NzRUxChogby_6TMxvclmL7_gNmW4=s680-w680-h510',
    latitude: 36.9155,
    longitude: 10.2752
},

{
    id: '27',
    name: 'Le Comptoir de Tunis',
    description: 'An upscale restaurant offering innovative Tunisian dishes in a stylish setting in Lac 1.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOw2vqO4_UGKfrCwM_DlVxqcw4FrD-ZYmhn7B4g=s680-w680-h510',
    latitude: 36.8332,
    longitude: 10.2297
},
{
    id: '28',
    name: 'El Mida',
    description: 'A unique blend of Tunisian and Mediterranean cuisine in a charming venue in La Marsa.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOsgk48I7aIDL5bRa5LRnSXyoqt7qkWIjQkasNz=s680-w680-h510',
    latitude: 36.8890,
    longitude: 10.3188
},
{
    id: '29',
    name: 'Dar El Marsa',
    description: 'A refined restaurant in La Marsa offering a mix of local and international dishes with a sea view.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMCl9VJUJi_jq_5sCxhfvNKRKPysRcElzSIBm5Y=s680-w680-h510',
    latitude: 36.8825,
    longitude: 10.3304
},
{
    id: '30',
    name: 'Al Mazar',
    description: 'Located in Carthage, offering traditional Tunisian cuisine with an exceptional view of the ruins.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOqH4BtWXjkwoMMcJsxDGuVRAOfvxlKtEp0QABF=s680-w680-h510',
    latitude: 36.8568,
    longitude: 10.3303
},
{
    id: '31',
    name: 'Le Pescatore',
    description: 'An elegant restaurant in La Goulette specializing in fresh seafood and Mediterranean dishes.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMhrS6MkXQMC3MuvqPC8gW_UHYwCY1L1xb9TiRq=s680-w680-h510',
    latitude: 36.8150,
    longitude: 10.3055
},
{
    id: '32',
    name: 'Dar Tej',
    description: 'A hidden gem in Tunis offering refined Tunisian cuisine in a traditional setting.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipN142tdg7OE4090lHRQkiVe9vErsEI2shBJKgnQ=s680-w680-h510',
    latitude: 36.7989,
    longitude: 10.1735
},

{
    id: '33',
    name: 'Au Bon Vieux Temps',
    description: 'A must-visit spot in Sidi Bou Said offering spectacular views and delicious cuisine.',
    image: 'https://static.wixstatic.com/media/9463b8_07aeffdd01c244348e0c1e099acf7adf~mv2.jpg/v1/fit/w_2500,h_1330,al_c/9463b8_07aeffdd01c244348e0c1e099acf7adf~mv2.jpg',
    latitude: 36.8695,
    longitude: 10.3451
},
{
    id: '34',
    name: 'La Tavolata',
    description: 'An Italian restaurant in La Marsa known for its wood-fired pizzas and fresh pasta.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOq-fQzk94X9bOAKC1AJ7LcTcGHm78gVDEqbYRH=s680-w680-h510',
    latitude: 36.8809,
    longitude: 10.3175
},
{
    id: '35',
    name: 'Dar Zmen',
    description: 'Located in the Medina of Tunis, this restaurant serves traditional dishes in a historic setting.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNEfhMFISmy7sNc5DDreWwvM5LXrqNyhlYyNCiQ=s680-w680-h510',
    latitude: 36.8012,
    longitude: 10.1679
},
{
    id: '36',
    name: 'Le Grand Italia',
    description: 'A chic restaurant in Lac 2 offering authentic Italian cuisine in a stylish ambiance.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPPJg5udI4ScPsaEMsDZBeH0LKfZT6LESulSTO-=s680-w680-h510',
    latitude: 36.8465,
    longitude: 10.2347
},
{
    id: '37',
    name: 'Beb Bhar',
    description: 'A restaurant located at Bab El Bhar, ideal for discovering Tunisian cuisine in a lively setting.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9m2pgzmVMkrs7WvYMPFaWilmapkpgkDlWNQ&s',
    latitude: 36.8025,
    longitude: 10.1728
},

{
    id: '38',
    name: 'The Breeze',
    description: 'Located in Gammarth, this restaurant offers fusion cuisine with stunning sea views.',
    image: 'https://lh3.googleusercontent.com/proxy/w74ViztMQu9uHw_CIugiIqTJt4_ohbPAkMA5fbq_CizD3VsL1c2sLIkKkVdJ3CErNi5TqbTjKkJBS-_ENieSCNC_Xymj2tk2TJscDRMz3Zz_kZaO3ncCllq9HXYt8ofdbahUlhzPqMOWPHk0Rn6vJ3lQ5-r3rw=s680-w680-h510',
    latitude: 36.9100,
    longitude: 10.2765
}


    // Add more pizzas as needed
];




const initialState = {
    restaurants: restaurents,
};

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        addRestaurant: (state, action) => {
            state.restaurants.push(action.payload);
        },
        removeRestaurant: (state, action) => {
            state.restaurants = state.restaurants.filter(
                restaurant => restaurant.id !== action.payload.id
            );
        },
        updateRestaurant: (state, action) => {
            const index = state.restaurants.findIndex(
                restaurant => restaurant.id === action.payload.id
            );
            if (index !== -1) {
                state.restaurants[index] = action.payload;
            }
        },
    },
});

export const { addRestaurant, removeRestaurant, updateRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;