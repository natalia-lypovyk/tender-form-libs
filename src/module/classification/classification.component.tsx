import React, { FC } from 'react';
import Text from "ustudio-ui/components/Text";
import TextInput from "ustudio-ui/components/Input/TextInput";
import { useFormContext, Controller } from 'react-hook-form';

export const Classification: FC = () => {
  const methods = useFormContext();

  return (
    <>
      <Text>Classification</Text>
      <label>
        <Controller
          name='classification-scheme'
          as={TextInput}
          control={methods.control}
          defaultValue='CPV'
        />
      </label>

      <label>
        <Controller
          name='classification-description'
          as={TextInput}
          control={methods.control}
          placeholder='Enter classification description'
        />
      </label>
    </>
  )
};
