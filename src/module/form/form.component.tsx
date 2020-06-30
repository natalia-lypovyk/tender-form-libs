import React, { FC, useContext } from 'react';
import { useForm, Controller, FormContext } from 'react-hook-form';
import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';
import { css } from 'styled-components';

import { Lot } from  '../lot';

import Styled from './form.styles';
import { Context } from '../../shared/context';

export const Form: FC = () => {
  const { dispatch } = useContext(Context);
  const methods = useForm();
  const { handleSubmit, reset, control, register, getValues } = methods;

  const onSubmit = (data: any) => {
    console.log(data);

    dispatch({
      type: 'ADD_TENDER',
      payload: {
        ...data
      }
    })

    reset();
  };

  return (
    <FormContext {...methods}>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Text variant='h5' align='center'>Tender</Text>
        <label>
          Tender title:
          <Controller
            name='title'
            as={TextInput}
            control={control}
            placeholder='Enter tender title'
          />
        </label>

        <label>
          Tender description:
          <Controller
            name='description'
            as={TextInput}
            control={control}
            placeholder='Enter tender description'
          />
        </label>

        <Text
          variant='h5'
          align='center'
          styled={{
            Text: css`
              margin-top: 10px;
            `,
          }}
        >
          Classification
        </Text>
        <label>
          Classification scheme:
          <Controller
            name='classification-scheme'
            as={TextInput}
            control={methods.control}
            defaultValue='CPV'
          />
        </label>

        <label>
          Classification description:
          <Controller
            name='classification-description'
            as={TextInput}
            control={methods.control}
            placeholder='Enter classification description'
          />
        </label>
        <Lot />
        <Button
          styled={{
            Button: css`
              display: block;
              margin: 10px auto 0;
              
             `,
          }}
          onClick={() => {
            console.log(JSON.stringify(getValues()))
          }}
        >
          Add tender
        </Button>
      </Styled.Form>
    </FormContext>
  )
};
