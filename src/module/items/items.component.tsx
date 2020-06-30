import React, { FC, useContext, Fragment } from 'react';
import { useFieldArray } from 'react-hook-form';
import { Context } from '../../shared/context';
import { Item } from '../item';

export const Items: FC<{ relatedLot: string | undefined }> = ({ relatedLot }) => {
  const { state, dispatch } = useContext(Context);
  const { fields, append } = useFieldArray({ name: 'items'});

  if (fields.length === 0) {
    append({});
  };

  return (
    <>
      {state.tender.items.map((item, index) => (
        <Fragment key={item.id}>
          <Item index={index} relatedLot={relatedLot} />
        </Fragment>
      ))}
    </>
  )
};
