import {createAction, createReducer, on} from '@ngrx/store';


export const authReducer = createReducer(
  {maskUserName: true},
  on(createAction('[Login] Toggle Mask Username'), state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
