import { useAppDispatch, useAppSelector } from '../../Redux/store';
import './Filter.scss';
import { setQuery } from '../../Redux/Slices/query.slice';

export const Filter: React.FC = () => {
  const query = useAppSelector(state => state.query.value);
  const dispatch = useAppDispatch();

  const handleSearch = (search: string) => {
    dispatch(setQuery(search));
  }

  const handleClearQuery = () => {
    dispatch(setQuery(''));
  }
  
  return (
    <div className="filter">
      <input
        type="text"
        className='filter__field'
        placeholder='Start typing...'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {query && (
        <button 
          className='filter__clear'
          onClick={handleClearQuery}
        />
      )}
    </div>
  );
}

