import { createContext } from 'react';
import {Tender} from "./types";

type Action = {
  type: string;
  payload: any;
}

export const initialState: Tender = {
  tender: {
    title: '',
    description: '',
    classification: {
      scheme: 'CPV',
      id: '',
      description: '',
    },
    lots: [],
    items: [],
  }
};

export const Context = createContext<{ state: typeof initialState, dispatch: (action: Action) => void }>({
  state: initialState,
  dispatch: () => {}
});
