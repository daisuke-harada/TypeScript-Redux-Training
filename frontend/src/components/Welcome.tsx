import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWelcomeMessage } from '../features/welcome/welcomeSlice';
import { AppDispatch, RootState } from '../app/store';

export const Welcome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const message = useSelector((state: RootState) => state.welcome.message);
  const status = useSelector((state: RootState) => state.welcome.status);

  useEffect(() => {
    dispatch(fetchWelcomeMessage());
  }, [dispatch]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <p>{message}</p>}
      {status === 'failed' && <p>Failed to load welcome message.</p>}
    </div>
  );
};
