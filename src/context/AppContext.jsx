import React, { useContext, useReducer } from 'react';

export const DATA_CENTER_USER = '';
export const DATA_CENTER_TOKEN = '@urdct';

const defaultContext = {
  user: null,
  isAdmin: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return {...state, ...action.payload};
    case 'reset':
      return {...state, ...defaultContext};
    default:
      return state;
  }
}

export const AppContext = React.createContext(defaultContext);

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  const update = payload => {
    dispatch({type: 'update', payload });
  }

  const signIn = data => {
    const isAdmin = /^(admin|superadmin)$/.test(data?.user_type);
    data.isAdmin = isAdmin
    update({
      user: data,
      isAdmin,
    })
    localStorage.setItem(DATA_CENTER_TOKEN, data.token);
    localStorage.setItem(DATA_CENTER_USER, JSON.stringify({
      username: data.username, 
      isAdmin, 
      id: data?.id
    }));
  };

  const signOut = () => {
    localStorage.removeItem(DATA_CENTER_TOKEN);
    localStorage.removeItem(DATA_CENTER_USER);
    update({
      user: null,
      isLoggedIn: false,
    })
  };

  const loadData = () => {
    let d = localStorage.getItem(DATA_CENTER_USER);
    if (d) {
      update({
        user: d,
        isAdmin: d?.isAdmin,
      })
    }
  };

  const updateUser = data => {
    update({user: data})
  };

  let value = {
    user: state?.user,
    isAdmin: state?.isAdmin,
    signIn,
    signOut,
    updateUser,
    loadData,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};