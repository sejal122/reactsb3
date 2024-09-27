import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import itemsSliceReducer from './itemsSlice'
export const store =configureStore({
    reducer:{
        counter:counterReducer,
        itemsSlice:itemsSliceReducer
    }
})
