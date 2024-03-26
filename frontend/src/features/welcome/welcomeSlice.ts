import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client';

interface WelcomeState {
  message: string;
  // status: 'idle' | 'loading' | 'succeeded' | 'failed'のいずれかの値を取ることができる列挙型です
  // （開始前、進行中、成功、失敗）を表現するために設計されている
  status:  'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: WelcomeState = {
  message: '',
  status: 'idle'
}

export const fetchWelcomeMessage = createAsyncThunk(
  'welcome/fetchMessage', // welcome/fetchMessageを識別子とするpending、fulfilled、rejectedの各フェーズに対応するアクションタイプが自動的に生成される。
  async () => {
    const response = await client.get('/welcome');
    return response.data.message; // RailsアプリケーションがJSON形式でメッセージを返すと仮定
  }
)

const welcomeSlice = createSlice({
  name: 'welcome',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWelcomeMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWelcomeMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload;
      })
      .addCase(fetchWelcomeMessage.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default welcomeSlice.reducer;