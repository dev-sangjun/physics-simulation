import { IBody } from "../classes";

export const SET_BODY = "SET_BODY";
export const REMOVE_BODY = "REMOVE_BODY";

type SetBodyAction = {
  type: typeof SET_BODY;
  payload: IBody;
};

type RemoveBodyAction = {
  type: typeof REMOVE_BODY;
};

type BodyActionTypes = SetBodyAction | RemoveBodyAction;

export const setBody = (payload: IBody): SetBodyAction => ({
  type: SET_BODY,
  payload,
});

export const removeBody = (): RemoveBodyAction => ({
  type: REMOVE_BODY,
});

const initialState = null;

export default function (state = initialState, action: BodyActionTypes) {
  switch (action.type) {
    case SET_BODY:
      return action.payload;
    case REMOVE_BODY:
      return null;
    default:
      return state;
  }
}
