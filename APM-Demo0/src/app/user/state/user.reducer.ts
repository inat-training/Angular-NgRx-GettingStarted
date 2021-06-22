import {createAction, createReducer, on} from '@ngrx/store';

export interface UserState {
  maskUserName: boolean;
}

const initialUserState: UserState = {
  maskUserName: false
};

export const userReducer = createReducer<UserState>(
  initialUserState,
  on(createAction('[Login] Toggle Mask Username'), (state): UserState => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
