import {Box, Text, VStack, FlatList, HStack, Icon, Spacer, Avatar, Heading} from 'native-base'
import { Body as BodyComponent } from '../../components/Body'
import { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'
import { Pressable } from 'react-native';
import {axios} from 'axios'
import { useEffect } from 'react';
import api from '../../services/axios'
const produtos = [{
    id: 1,
    category: "Men's Clothing",
    item: "Mocado T-Shirt",
    price: 25.99
  },
  {
    id: 2,
    category: "Men's Clothing",
    item: "Mocado Hoodie",
    price: 49.99
  },
  {
    id: 3,
    category: "Men's Clothing",
    item: "Mocado Denim Jacket",
    price: 89.99
  },
  {
    id: 4,
    category: "Men's Clothing",
    item: "Mocado Button-Up Shirt",
    price: 59.99
  },
  {
    id: 5,
    category: "Men's Clothing",
    item: "Mocado Sweatpants",
    price: 39.99
  }];
  const Item = ({ item, onPress }) => (
      <TouchableOpacity p='20' mx='8' my='16' onPress={onPress}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );

export function Products({navigation}){
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [items, setItems] = useState({});
    // const [newItem, setNewItem] = useState('');

    const handleProductPress = (item) => {
        setSelectedProduct(item);
        navigation.navigate('NewProducts', { productId: item.id, productName: item.item });
    };
    useEffect(() => {
        async function onLoad() {
            fetch("https://728e-187-18-136-201.ngrok.io/products")
            .then((res)=>res.json())
            .then(resJson => {console.log(resJson)}).catch(e => {console.log(e, 'teste4')})
            // try {
            //    const response = await api.get('/newProducts');
            //    console.log(response.data,'teste');
            // } catch(error) {
            //    console.log(error)
            // }
        }
        onLoad(); 
    }, []);

    return(
        <BodyComponent
            title='Produtos'
        >
            <Box p={5}>
                <Box alignSelf={'center'} mt={7} alignItems={'center'} w='100%' h='80%' display='flex'>
                    <VStack space={8}>
                        <FlatList 
                            data={produtos} 
                            renderItem={({item}) => 
                                <Pressable onPress={() => handleProductPress(item)}>
                                    <Box 
                                        borderBottomWidth="1" 
                                        _dark={{borderColor: "muted.50"}} 
                                        borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="4"
                                    >
                                    <HStack space={[4, 6]} justifyContent="space-between">
                                        <VStack>
                                            <Text
                                                _dark={{color: "warmGray.50"}} 
                                                color="coolGray.800" bold
                                            >
                                                {item.item}
                                            </Text>
                                            <Text 
                                                color="coolGray.600" 
                                                _dark={{color: "warmGray.200"}}
                                            >
                                                {item.price}
                                            </Text>
                                        </VStack>
                                        <Spacer />
                                        <Box
                                            _dark={{color: "warmGray.50"}} 
                                            color="coolGray.800" 
                                            alignSelf="flex-start"
                                        >
                                            
                                                <Icon as={<AntDesign name="arrowright" />} size={'lg'} color='white'/>
                                        </Box>
                                </HStack>
                            </Box>
                            </Pressable>
                            }keyExtractor={item => item.id} />
                        {/* {produtos.map(i => (
                            // <Pressable onPress={()=>{navigation.navigate('newRoute')}}>
                                <HStack space={10}>
                                    <Box width='200px'>
                                        <Text fontSize={32} color='white'>{i.item}</Text>
                                    </Box>
                                    
                                </HStack>

                            // </Pressable>
                        ))} */}
                    </VStack>
                </Box>
            </Box>
        </BodyComponent>
    )
}