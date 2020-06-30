import React, { FC, useReducer } from 'react';
import { Form } from '../module/form';
import { reducer } from '../shared/reducer';
import { initialState, Context } from '../shared/context';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Form />
    </Context.Provider>
  );
}

