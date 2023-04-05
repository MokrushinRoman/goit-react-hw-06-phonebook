// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { initialContacts } from 'reduxFiles';

// const contactsReducer = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case 'contacts/addContact':
//       return [...state, payload];

//     case 'contacts/deleteContact':
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'filter/filterContacts':
//       return payload;

//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
