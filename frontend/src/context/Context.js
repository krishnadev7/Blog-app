import { createContext, useEffect, useReducer } from 'react';
import { json } from 'react-router-dom';

const userLs = localStorage.getItem('user')

const INITIAL_STATE = {
  user: userLs? JSON.parse(userLs) : null,
  loading: false,
  error: false,
};

export const UserContext = createContext(INITIAL_STATE);

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        loading: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        loading: false,
        error: true,
      };
    case 'LOGOUT':
      return{
        user: null,
        loading: false,
        error: false
      }
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(state.user))
  },[state.user])
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
