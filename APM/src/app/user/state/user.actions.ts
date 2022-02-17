import { createAction, props } from "@ngrx/store";

export const maskUserName = createAction(
    '[User] mask username'
    , props<{shouldMask: boolean}>()
  );