import { Action } from "redux";

interface RecorderState {
  dateStart: string;
}

const START = "recorder/start";
const STOP = "recorder/stop";

// action objects
type StartAction = Action<typeof START>;
type StopAction = Action<typeof STOP>;

// action creators
export const start = (): StartAction => ({
  type: START,
});

export const stop = (): StopAction => ({
  type: STOP,
});

const initialState: RecorderState = {
  dateStart: "",
};

const recorderReducer = (
  state: RecorderState = initialState,
  action: StartAction | StopAction
) => {
  switch (action.type) {
    case START:
      return { ...state, dateStart: new Date().toISOString() };
    case STOP:
      return { ...state, dateStart: "" };
    default:
      return state;
  }
};

export default recorderReducer;
