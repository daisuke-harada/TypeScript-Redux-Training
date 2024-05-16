import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  TaskActionTypes
} from "../actions/taskActions"

import { TaskState } from "../types/task"

const initialState: TaskState = {
  loading: false,
  tasks: [],
  error: null
}

const taskReducer = (state = initialState, action: TaskActionTypes): TaskState => {
  switch(action.type) {
    case FETCH_TASKS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      }
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default taskReducer