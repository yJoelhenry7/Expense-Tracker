/* eslint-disable react/prop-types */
import {createContext,useReducer} from "react";
import AppReducer from './AppReducer';
import axios from 'axios';

// Intial State
const initialState ={
    transactions:[],
    error: null,
    loading: true
}

// create context
export const GlobalContext = createContext(initialState);

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

// Provider component
export const GlobalProvider = ({ children }) =>{
  const [state,dispatch] = useReducer(AppReducer,initialState);

    // Actions
    async function getTransactions() {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/transactions`);

        dispatch({
          type: 'GET_TRANSACTIONS',
          payload: res.data.data
        });
      } catch (err) {
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.response.data.error
        });
      }
    }

    async function deleteTransaction(id) {
      try {
        await axios.delete(`${BACKEND_URL}/api/v1/transactions/${id}`);
  
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      } catch (err) {
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.response.data.error
        });
      }
    }
  
    async function addTransaction(transaction) {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      try {
        const res = await axios.post(`${BACKEND_URL}/api/v1/transactions`, transaction, config);
  
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: res.data.data
        });
      } catch (err) {
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.response.data.error
        });
      }
    }

  return (<GlobalContext.Provider value={{
    transactions:state.transactions ,
    error: state.error,
    loading: state.loading,
    getTransactions,
    deleteTransaction ,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}
