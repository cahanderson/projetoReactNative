import {axios} from './axios'

// const csrf = () => axios.get('/sanctum/csrf-cookie')

const getAll = async () =>{
  // try {
      const data = await axios.get('/products')
      console.log(data)

  //     if(data){
  //       return data 
  //     }else{
  //       return new Error('Erro ao listar os registros')  
  //     }
  // } catch (error) {
  //     return error;
  // }
};
// const getById = async (id) => {
//   try {
//     const { data } = await axios.get(`/api/users/${id}`);

//     if (data) {
//       return data;
//     }
//     return new Error('Erro ao consultar o registro.');
//   } catch (error) {

//     const erro = error.response.data
//     return new Error(erro.message);
//   }
// }; 
// const create = async (dados) => {

//   await csrf()

//   try {
//     const { data } = await axios.post('/api/users', dados);
//     if (data) {
//       return data.id;
//     }
//     // return new Error('Erro ao criar o registro.');
//   } catch (error) {
//     const erro = error.response.data
//     return new Error(erro.message);
//   }
// };
// const updateById = async (id, dados) => {
//   try {
//     await axios.put(`/api/users/${id}`, dados);
//   } catch (error) {
//     const erro = error.response.data
//     return new Error(erro.message);
//   }
// };  
// const deleteById = async (id)=> {
//   try {
//     await axios.delete(`/api/users/${id}`);
//   } catch (error) {
//     console.error(error);
//     return new Error('Erro ao apagar o registro.');
//   }
// };

export const Routes = {
  getAll,
//   create,
//   getById,
//   updateById,
//   deleteById,
};