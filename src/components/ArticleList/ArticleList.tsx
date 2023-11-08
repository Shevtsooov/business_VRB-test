import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { NormalizedArticle } from '../../types/Article';
import { ArticleInfo } from '../ArticleInfo/ArticleInfo';
import './ArticleList.scss';
import { resetArticlesState, setArticlesState } from '../../Redux/Slices/articlesState.slice';

type Props = {
  articles: NormalizedArticle[] | undefined;
}; 

export const ArticleList: React.FC<Props> = ({ articles }) => {
  const pinnedArticle = useAppSelector(state => state.pinnedArticle.value);
  const articlesState = useAppSelector(state => state.articlesState.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetArticlesState());
    dispatch(setArticlesState(articles));
  }, [articles]);

  let filteredArticles = articlesState;

  if (pinnedArticle) {
    filteredArticles = articlesState.filter(article => article.title !== pinnedArticle.title);
  }
  
  return (
    <div className="articleList">

      {pinnedArticle && (
        <ArticleInfo
          article={pinnedArticle}
          key={pinnedArticle.title}
        />
      )}

      {filteredArticles?.map(article => (
        <ArticleInfo
          article={article}
          key={article.title}
        />
      ))}

    </div>
  );
};
