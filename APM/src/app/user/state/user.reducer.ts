import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";
import { maskUserName } from "./user.actions";

export interface UserState{
    maskUserName: boolean,
    currentUser: User
}

const initialUserState: UserState = {
    currentUser: null,
    maskUserName: true
};

const getUserState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserState,
    state => state.maskUserName
);

export const getCurrentUser = createSelector(
    getUserState,
    state => state.maskUserName
);

export const userReducer = createReducer<UserState>(
    initialUserState,
    on(maskUserName, (state, action) => {
        return {
            ...state,
            maskUserName: action.shouldMask
        }
    })

);