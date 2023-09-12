import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import themeSlice from './reducers/theme.slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
  middleware: [thunk],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
