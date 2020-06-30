import { Tender } from './types';

export const reducer = (state: Tender, action: any) => {
  switch (action.type) {
    case 'ADD_TENDER': {
      return {
        tender: {
          ...action.payload
        }
      }
    }
    case 'ADD_ITEM': {
      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items,
            action.payload
          ]
        }
      }
    }
    default:
      return state;
  }
}
