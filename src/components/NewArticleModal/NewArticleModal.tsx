import { resetAuthor, setAuthor } from '../../Redux/Slices/author.slice';
import { setDescription, resetDescription } from '../../Redux/Slices/description.slice';
import { setTitle, resetTitle } from '../../Redux/Slices/title.slice';
import { setUrlToImage, resetUrlToImage } from '../../Redux/Slices/urlToImage.slice';
import { useAppSelector, useAppDispatch } from '../../Redux/store';
import './NewArticleModal.scss';
import { FormEvent, useState } from 'react';
import { urlRegex } from '../../helpers/RegExp';
import { addArticleToState } from '../../Redux/Slices/articlesState.slice';
import { hideModalWindow } from '../../Redux/Slices/isModalOpen.slice';
import { setCreatedArticles } from '../../Redux/Slices/createdArticles.slice';

export const NewArticleModal: React.FC = () => {
  const title = useAppSelector(state => state.title.value);
  const description = useAppSelector(state => state.description.value);
  const urlToImage = useAppSelector(state => state.urlToImage.value);
  const author = useAppSelector(state => state.author.value);

  const noErrors = {
    noTitle: '', 
    noDescription: '', 
    incorrectLink: '',
    noAuthor: '',
  };

  const [error, setError] = useState(noErrors);

  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(hideModalWindow());
  };

  const handleSetTitle = (title: string) => {
    dispatch(setTitle(title));
  };

  const handleClearTitle = () => {
    dispatch(resetTitle());
  };
  
  const handleSetDescription = (description: string) => {
    dispatch(setDescription(description));
  };

  const handleClearDescription= () => {
    dispatch(resetDescription());
  };

  const handleSetUrlToImage = (urlToImage: string) => {
    dispatch(setUrlToImage(urlToImage));
  };

  const handleClearUrlToImage = () => {
    dispatch(resetUrlToImage());
  };

  const handleSetAuthor = (author: string) => {
    dispatch(setAuthor(author));
  };

  const handleClearAuthor = () => {
    dispatch(resetAuthor());
  };

  const handleSubmitForm = (event: FormEvent
    ) => {
      event.preventDefault();

    const anyError = !urlRegex.test(urlToImage)
    || !title
    || !description
    || !author;

    if (anyError) {
      if (title === '') {
        setError(error => ({
          ...error,
          noTitle: 'Please specify the title'
        }));
      }
  
      if (!description) {
        setError(error => ({
          ...error,
          noDescription: 'Please write some description'
        }));
      }
  
      if (!urlRegex.test(urlToImage)) {
        setError(error => ({
          ...error,
          incorrectLink: 'Please make sure the link is correct'
        }));
      }
  
      if (!author) {
        setError(error => ({
          ...error,
          noAuthor: 'Please specify the author of the article'
        }));
      }

      setTimeout(() => {
        setError(noErrors);
      }, 2000);

      return;
    }
    
    const newArticle = {
      title,
      description,
      urlToImage,
      author,
    }
    
    dispatch(addArticleToState(newArticle));
    dispatch(setCreatedArticles(newArticle));

    dispatch(hideModalWindow());
    dispatch(resetTitle());
    dispatch(resetDescription());
    dispatch(resetUrlToImage());
    dispatch(resetAuthor());
  };

  return (
    <div
      className='modalWindow'
      >
      <h3 className='modalWindow__title'>Add new article</h3>

      <button 
        className='modalWindow__close'
        onClick={handleCloseModal}
      />

      <form
        className='modalWindow__form'
        onSubmit={handleSubmitForm}
      >
        <div className='modalWindow__input'>
          <input
            className='modalWindow__field'
            type="text"
            placeholder='Specify the title of the article'
            value={title}
            onChange={(event) => handleSetTitle(event.target.value)}
          />

          {error.noTitle && (
            <p className='modalWindow__error'>
              {error.noTitle}
            </p>
          )}

          {title !== '' && (
            <button 
              className='modalWindow__clear'
              onClick={handleClearTitle}
            />
          )}
        </div>
        
        <div className='modalWindow__input'>
          <textarea
            className='modalWindow__field'
            placeholder='Type in a description of the article'
            value={description}
            onChange={(event) => handleSetDescription(event.target.value)}
          />

          
          {error.noDescription && (
            <p className='modalWindow__error'>
              {error.noDescription}
            </p>
          )}

          {description !== '' && (
            <button 
              className='modalWindow__clear'
              onClick={handleClearDescription}
            />
          )}
        </div>

        <div className='modalWindow__input'>
          <input
            className='modalWindow__field'
            type="text"
            placeholder='Provide a link to an image here'
            value={urlToImage}
            onChange={(event) => handleSetUrlToImage(event.target.value)}
          />

          
          {error.incorrectLink && (
            <p className='modalWindow__error'>
              {error.incorrectLink}
            </p>
          )}

          {urlToImage !== '' && (
            <button 
              className='modalWindow__clear'
              onClick={handleClearUrlToImage}
            />
          )}
        </div>

        <div className='modalWindow__input'>
          <input
            className='modalWindow__field'
            type="text"
            placeholder='Specify the author of the article here'
            value={author}
            onChange={(event) => handleSetAuthor(event.target.value)}
          />

          
          {error.noAuthor && (
            <p className='modalWindow__error'>
              {error.noAuthor}
            </p>
          )}

          {author !== '' && (
            <button 
              className='modalWindow__clear'
              onClick={handleClearAuthor}
            />
          )}
        </div>
        
        <button
          type='submit'
          className='modalWindow__submit'
        >
          Add new article
        </button>
      </form>
      </div>
  );
};


