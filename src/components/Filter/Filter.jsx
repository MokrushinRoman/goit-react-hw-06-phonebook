import { Label } from './Filter.styled';
import { capitalLetter } from 'helpers';
import { useDispatch } from 'react-redux';
import { setFilter } from 'reduxFiles';

export const Filter = () => {
  const dispatch = useDispatch();
  let prevValue = '';

  const handleFilter = e => {
    const normalizedValue = e.target.value.toLowerCase().trim();

    if (normalizedValue === prevValue) {
      return;
    }

    prevValue = normalizedValue;
    dispatch(setFilter(normalizedValue));
  };

  return (
    <Label>
      {capitalLetter('find contact by name')}
      <input type="text" onChange={handleFilter} />
    </Label>
  );
};
