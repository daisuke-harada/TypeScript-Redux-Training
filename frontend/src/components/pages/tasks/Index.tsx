import { memo, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../../actions/taskActions';
import tw from 'twin.macro';
import { Task, TaskState } from '../../../types/task';

export const Index: FC = memo(() => {
  const dispatch = useDispatch()
  const tasks = useSelector((state: { taskReducer: TaskState }) => state.taskReducer.tasks);
  const MainDiv = tw.div`flex flex-col items-center`;
  const FlexContainer = tw.div`flex flex-col w-full`;
  const FlexHeader = tw.div`flex justify-between text-lg px-4 py-2 border-b border-red-300 border-solid`;
  const FlexRow = tw.div`flex justify-between border px-4 py-2 border-red-300 border-solid`;

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch]);

  return (
    <MainDiv>
      <FlexContainer>
        <FlexHeader>
          <div>ID</div>
          <div>Task Details</div>
        </FlexHeader>
        {tasks.map((task: Task) => (
          <FlexRow key={task.id}>
            <div>{task.id}</div>
            <div>{task.title}</div>
          </FlexRow>
        ))}
      </FlexContainer>
    </MainDiv>
  );
});
