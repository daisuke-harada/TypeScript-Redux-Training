export type Task = {
  id: number;
  title: string;
};

/**
 * TaskStateはReduxのstoreで使用される型です。この型は、タスクのローディング状態、
 * タスクのリスト、およびエラーメッセージを管理するために使用されます。
 * - `loading`: APIからタスクデータをフェッチする際のローディング状態を示すブール値。
 * - `tasks`: タスクの配列。各タスクは`Task`型に従います。
 * - `error`: エラー発生時のメッセージを格納する。エラーがない場合はnull。
 */
export type TaskState = {
  loading: boolean;
  tasks: Task[];
  error: string | null;
}
