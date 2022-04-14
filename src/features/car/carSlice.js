import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    cares: ['Model S', 'Model 3', 'Model X', 'Model Y']
}

const carSlice = createSlice({
    name: "car",
    initialState: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer