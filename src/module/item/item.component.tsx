import React, { FC, useContext } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import { Context } from '../../shared/context';

import Styled from './item.styles';

export const Item: FC<{ relatedLot: string | undefined, index: number }> = ({ relatedLot, index }) => {
  const { state, dispatch } = useContext(Context);
  const methods = useFormContext();


  return (
    <Styled.ItemContainer>
      <Text variant='h5' align='center'>Item</Text>
      <label>
        Item description:
        <Controller
          name='item-description'
          as={TextInput}
          control={methods.control}
        />
      </label>

      <label>
        <Controller
          name='item-quantity'
          as={TextInput}
          control={methods.control}
          placeholder='Enter item quantity'
        />
      </label>

      <label>
        Unit:
        <label>
          Metre
          <input
            type='radio'
            value='123'
            name='unit'
          />
        </label>

        <label>
          Kilo
          <input
            type='radio'
            value='321'
            name='unit'
          />
        </label>
      </label>
    </Styled.ItemContainer>
  )
};
