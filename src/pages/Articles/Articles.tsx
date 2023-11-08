import { useEffect, useState } from 'react';
import { useFindArticlesQuery } from '../../Redux/RTK_Query/articles.service';
import { Filter } from '../../components/Filter/Filter';
import { ArticleList } from '../../components/ArticleList/ArticleList';
import './Articles.scss';
import { NewArticleModal } from '../../components/NewArticleModal/NewArticleModal';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { hideModalWindow, showModalWindow } from '../../Redux/Slices/isModalOpen.slice';

export const Articles = () => {
  const [pageSize, setPageSize] = useState(10);

  const query = useAppSelector(state => state.query.value);
  const isModalOpen = useAppSelector(state => state.isModalOpen.value);
  const articlesState = useAppSelector(state => state.articlesState.value);
  const dispatch = useAppDispatch();
  
  const { data, refetch} = useFindArticlesQuery({
    query,
    pageSize,
  });

  useEffect(() => {
    refetch()
  }, [query, pageSize]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';

      return;
    }

    document.body.style.overflow = 'auto'
  }, [isModalOpen]);

  const handleShowModal = () => {
    dispatch(showModalWindow());
  };

  const handleCloseModal = () => {
    dispatch(hideModalWindow());
  };

  const showMore = () => {
    setPageSize(state => state + 10)
  };

  console.log('articlesState - ', articlesState);

  return (
    <div className='articlesPage'>

      {isModalOpen && (
        <div
          className='articlesPage__blur'
          onClick={handleCloseModal}
        />
      )}

      {!isModalOpen && (
        <button
          className='articlesPage__add'
          onClick={handleShowModal}
        />
      )}

      {isModalOpen && <NewArticleModal />}
      
      <Filter />

      <ArticleList articles={data?.articles} />

      <button
        className='articlesPage__more'
        onClick={showMore}
      >
        Show more
      </button>
    </div>
  );
}

