import {PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit';

// best practices to make func in diff file
interface UserStateValue {
    username: string;
}

interface UserState {
value: UserStateValue;
}
const initialState = {value: {username: ""}} as UserState
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: UserState, action: PayloadAction<UserStateValue>) => {
            // new val of state is equal to action return
            state.value = action.payload
        },

        logout: (state: UserState) => {
            // clearing whatever username was made before
            state.value = initialState.value
        }
    }
})

export const {login, logout} = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});
