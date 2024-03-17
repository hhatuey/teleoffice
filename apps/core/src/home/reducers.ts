const message = (store = { value: 'none' }, action: { type: string; payload: any }) => {
  if (action.type === 'UPDATE_MESSAGE') {
    return {
      value: action.payload,
    };
  } else if (action.type === 'REMOVE_MESSAGE') {
    return {
      value: 'none',
    };
  }

  return store;
};

export const reduxReducers = {
  message,
};
