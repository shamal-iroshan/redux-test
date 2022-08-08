import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [],
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        addCard(state, action) {
            const tempCards = [...state.cards];
            tempCards.push(action.payload);
            state.cards = tempCards;
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