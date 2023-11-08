import { useState } from 'react';
import { NormalizedArticle } from '../../types/Article';
import './ArticleInfo.scss';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '../../Redux/store';
import { resetPinnedArticle, setPinnedArticle } from '../../Redux/Slices/pinnedArticle.slice';
import { filterCreatedArticles } from '../../Redux/Slices/createdArticles.slice';
import { filterArticlesState } from '../../Redux/Slices/articlesState.slice';

type Props = {
  article: NormalizedArticle
}

export const ArticleInfo: React.FC<Props> = ({ article }) => {
  const {
    title,
    urlToImage,
    description,
    author,
  } = article;

  const pinnedArticle = useAppSelector(state => state.pinnedArticle.value);
  const createdArticles = useAppSelector(state => state.createdArticles.value);
  const [currentArticle, setCurrentArticle] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const handeSetCurrentArticle = (title: string) => {
    setCurrentArticle(title);
  };

  const handeRemoveCurrentArticle = () => {
    setCurrentArticle(null);
  };

  const handlePinArticle = (article: NormalizedArticle) => {
    if (article.title === pinnedArticle?.title) {
      dispatch(resetPinnedArticle());
      
      return;
    }

    dispatch(setPinnedArticle(article));
  };

  const handleRemoveArticle = (article: NormalizedArticle) => {
    dispatch(filterArticlesState(article));
    dispatch(filterCreatedArticles(article));
    
    if (pinnedArticle?.title === article.title) {
      dispatch(resetPinnedArticle());
    }
  };

  return (
    <div
      className='article'
      onMouseEnter={() => handeSetCurrentArticle(title)}
      onMouseLeave={handeRemoveCurrentArticle}
    >
      <div
        className={cn('article__buttons', {
          'article__buttons--active': currentArticle === title
        })}
      >
        <button
          className={cn('article__button article__button--pin', {
            'article__button--unpin': article.title === pinnedArticle?.title
          })}
          onClick={() => handlePinArticle(article)}
        />

        {createdArticles.includes(article) && (
          <button
            className='article__button article__button--remove'
            onClick={() => handleRemoveArticle(article)}
          />
        )}
      </div>

      <img
        src={`${urlToImage}`}
        alt="Unfortunately, the icon is absent"
        className='article__img'
      />

      <h2 className='article__title'>{title}</h2>

      <p className='article__description'>{description}</p>

      <p className='article__author'>{author}</p>
    </div>
  );
}
