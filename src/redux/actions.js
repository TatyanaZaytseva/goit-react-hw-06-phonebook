import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', contact => {
  return {
    payload: {
      contact,
      id: nanoid(),
    },
  };
});
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filters/setFilter');
