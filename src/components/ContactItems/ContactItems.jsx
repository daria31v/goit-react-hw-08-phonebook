import PropTypes from 'prop-types';
import { DeleteBtn, Item, WrapItem, Wrap } from './ContactItems.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { GiRotaryPhone } from 'react-icons/gi';
import { useState } from 'react';
import { existContacts } from '../../redux/contacts/operations';

export const ContactItems = ({ id, name: nameValue, number: numberValue }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);

  const handleDelete = () => dispatch(deleteContact(id));

  const handleChangeMode = () => {
    if (isEdit) {
      setIsEdit(prev => !prev);
      dispatch(existContacts({ id, name, number }));
      return;
    }
    setIsEdit(prev => !prev);
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return;
    }
  };

  return (
    <Wrap>
      <GiRotaryPhone />
      <WrapItem>
        {isEdit ? (
          <input type="text" value={name} name='name' onChange={handleChange} />
        ) : (
          <Item>{name}:</Item>
        )}
        {isEdit ? (
          <input
            type="text"
            value={number}
            name='number'
            onChange={handleChange}
          />
        ) : (
          <Item>{number}</Item>
        )}
      </WrapItem>
      <div>
        <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
        <DeleteBtn onClick={handleChangeMode}>
          {isEdit ? 'Save' : 'Edit'}
        </DeleteBtn>
      </div>
    </Wrap>
  );
};

ContactItems.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
}.isRequired;
