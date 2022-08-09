import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [],
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        addCard(state, action) {},
        getCards() {},
        saveCards(state, action) {
            state.cards = action.payload;
        }
    }
});

//Actions
export const homeActions = homeSlice.actions;

//Selectors
export const selectCards = (state) => state.homeReducer.cards;

//Reducer
const homeReducer = homeSlice.reducer;
export default homeReducer;