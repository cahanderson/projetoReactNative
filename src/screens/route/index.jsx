// import {Box, Checkbox, Flex, Heading, HStack, Icon, Pressable,Stack,Text, VStack, Button} from 'native-base'
// import { AntDesign, Feather } from '@expo/vector-icons'
// import { Body as BodyComponent } from '../../components/Body'

// export function Route({navigation}){
//     let produtos = ["Caucaia", "Maracanaú", "Morada nova" ]
//     return(
//         <BodyComponent
//             title='Rotas'
//         >
//             <Box p={7}>
//                 <Box  alignSelf={'center'} mt={7} alignItems={'center'} w='100%' h='70%' display='flex'>
//                     <VStack space={8}>
//                         {produtos.map((i)=>(
//                             <Pressable onPress={()=>{navigation.navigate('newRoute')}}>
//                                 <HStack space={10}>
//                                     <Box width='200px'  ><Text fontSize={32} color='white'>{i}</Text></Box>
//                                     <Box><Icon as={<AntDesign name="arrowright" />} size={10} color='white'/></Box>
//                                 </HStack>

//                             </Pressable>
//                         ))}
//                     </VStack>
//                 </Box>
//                 <Box alignItems={'flex-end'} w='full'>
//                     <Pressable >
//                         <Icon as={<AntDesign name="pluscircleo" />} size={10} color='white'/>
//                     </Pressable>
//                 </Box>
//             </Box>
//         </BodyComponent>
//     )
// }
//ChatGPT
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
export function Route({navigation}){
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/clothes');
      setClothes(result.data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={clothes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemName: {
    fontSize: 32,
  },
  itemDescription: {
    fontSize: 16,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#ff9f43',
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 15,
    borderRadius: 50,
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});