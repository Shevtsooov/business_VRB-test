import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ArticlesApi } from './RTK_Query/articles.service';
import { pinnedArticleReducer } from './Slices/pinnedArticle.slice';
import { queryReducer } from './Slices/query.slice';
import { articlesStateReducer } from './Slices/articlesState.slice';
import { titleReducer } from './Slices/title.slice';
import { authorReducer } from './Slices/author.slice';
import { urlToImageReducer } from './Slices/urlToImage.slice';
import { isModalOpenReducer } from './Slices/isModalOpen.slice';
import { descriptionReducer } from './Slices/description.slice';
import { createdArticlesReducer } from './Slices/createdArticles.slice';

export const store = configureStore({
  reducer: {
    pinnedArticle: pinnedArticleReducer,
    articlesState: articlesStateReducer,
    createdArticles: createdArticlesReducer,
    
    title: titleReducer,
    description: descriptionReducer,
    urlToImage: urlToImageReducer,
    author: authorReducer,

    isModalOpen: isModalOpenReducer,

    query: queryReducer,
    
    [ArticlesApi.reducerPath]: ArticlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(
        ArticlesApi.middleware
    )
  )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
