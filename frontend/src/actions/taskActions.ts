// タスクをフェッチするためのアクションタイプ
export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

// タスクのTypeScriptインターフェース
interface Task {
  id: number,
  title: string
}

// フェッチリクエストを開始するためのアクションインターフェース
interface FetchTasksRequestAction {
  type: typeof FETCH_TASKS_REQUEST;
}

// フェッチリクエストが成功した場合のアクションインターフェース、タスクの配列を持つ
interface FetchTasksSuccessAction {
  type: typeof FETCH_TASKS_SUCCESS;
  payload: Task[];
}

// フェッチリクエストが失敗した場合のアクションインターフェース、エラーメッセージを持つ
interface FetchTasksFailureAction {
  type: typeof FETCH_TASKS_FAILURE;
  payload: string;
}

// すべてのタスク関連アクションのユニオンタイプ
export type TaskActionTypes = FetchTasksRequestAction | FetchTasksSuccessAction | FetchTasksFailureAction;

// タスクフェッチリクエストのアクションクリエーター
export const fetchTasksRequest = (): FetchTasksRequestAction => ({
  type: FETCH_TASKS_REQUEST
});

// タスクフェッチが成功した場合のアクションクリエーター、タスクの配列を受け取る
export const fetchTasksSuccess = (tasks: Task[]): FetchTasksSuccessAction => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks
});

// タスクフェッチが失敗した場合のアクションクリエーター、エラーメッセージを受け取る
export const fetchTasksFailure = (error: string): FetchTasksFailureAction => ({
  type: FETCH_TASKS_FAILURE,
  payload: error
});
