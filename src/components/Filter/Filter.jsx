import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './FilterStyled';

import { userFilter } from 'redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => {
    const filterValue = e.target.value;
    dispatch(userFilter(filterValue));
  };

  return (
    <div>
      <Label>Find contacts by name:</Label>
      <Input type="text" onChange={handleFilterChange} defaultValue={filter} />
    </div>
  );
};
