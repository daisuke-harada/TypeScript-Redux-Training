import { client } from "../api/client"
import { Dispatch } from "redux"
import { Task } from "../types/task"

// Reduxのreducerがどのアクションが発生したかを識別するために使用されます。
export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

// Action interface for initiating fetch request
type FetchTasksRequestAction = {
  type: typeof FETCH_TASKS_REQUEST;
}

// Action type for successful fetch request, holds an array of tasks
type FetchTasksSuccessAction = {
  type: typeof FETCH_TASKS_SUCCESS;
  payload: Task[];
}

// Action type for failed fetch request, holds an error message
type FetchTasksFailureAction = {
  type: typeof FETCH_TASKS_FAILURE;
  payload: string;
}

export type TaskActionTypes = FetchTasksRequestAction | FetchTasksSuccessAction | FetchTasksFailureAction;

export const fetchTasksRequest = (): FetchTasksRequestAction => ({
  type: FETCH_TASKS_REQUEST
});

export const fetchTasksSuccess = (tasks: Task[]): FetchTasksSuccessAction => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks
});

export const fetchTasksFailure = (error: string): FetchTasksFailureAction => ({
  type: FETCH_TASKS_FAILURE,
  payload: error
});

// createActionでapiからデータを取り出し、dispatchする
export const fetchTasks = () => {
  return async (dispatch: Dispatch<TaskActionTypes>) => {
    dispatch(fetchTasksRequest());
    try {
      const response = await client.get('/tasks');
      dispatch(fetchTasksSuccess(response.data));
    } catch (error: any) {
      dispatch(fetchTasksFailure(error.message));
    }
  };
}