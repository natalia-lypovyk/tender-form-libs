import React, { FC, useContext, Fragment, MouseEvent } from 'react';
import { css } from 'styled-components';
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';
import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';

import { Items } from '../items';
import { Context } from "../../shared/context";

import Styled from './lot.styles';

export const Lot: FC = () => {
  const methods = useFormContext();
  const { state, dispatch } = useContext(Context);
  const { fields, append } = useFieldArray({ name: 'lots' });

  if (fields.length === 0) {
    append({});
  }

  return (
    <Styled.LotContainer>
      <Text variant='h5' align='center'>Create lot</Text>
      {fields.map((lot, index) => (
        <Fragment key={lot.id}>
          <label>
            Lot title:
            <Controller
              name='lot-title'
              as={TextInput}
              control={methods.control}
              placeholder='Enter lot title'
            />
          </label>
          <Button
            type='button'
            onClick={(e: MouseEvent) => {
              e.preventDefault();
              append({});
            }}
            styled={{
              Button: css`
                display: block;
                margin: 10px auto 0;
               `,
            }}
          >
            Add lot
          </Button>
          <Items relatedLot={lot.id} />
        </Fragment>
      ))}
    </Styled.LotContainer>
  )
};
