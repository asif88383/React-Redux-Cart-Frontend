import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {openModal} from '../modal/modalSlice';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true,
}

