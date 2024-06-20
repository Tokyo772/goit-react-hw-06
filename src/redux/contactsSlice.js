import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
