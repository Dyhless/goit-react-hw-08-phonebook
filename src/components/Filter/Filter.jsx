import { Input } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Input
      type="text"
      value={filter}
      onChange={event => dispatch(setFilter(event.target.value.trim()))}
    />
  );
};

export default Filter;
