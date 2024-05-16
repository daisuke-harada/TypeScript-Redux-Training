import { memo, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchTasks } from '../../../actions/taskActions';
import tw from 'twin.macro';
import { Task, TaskState } from '../../../types/task';

export const Index: FC = memo(() => {
  // ここを修正: state.taskReducer.tasks にアクセスする
  const tasks = useSelector((state: { taskReducer: TaskState }) => state.taskReducer.tasks);
  const MainDiv = tw.div`flex flex-col items-center`;
  const Table = tw.table`table-auto`;
  const Th = tw.th`px-4 py-2`;
  const Td = tw.td`border px-4 py-2`;

  useEffect(() => {
    fetchTasks()
  }, []);

  console.log(tasks)

  return (
    <MainDiv>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: Task) => (
            <tr key={task.id}>
              <Td>{task.id}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </MainDiv>
  );
});