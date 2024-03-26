import React, { FC } from 'react';
import { PlaceholderConversion } from './PlaceholderConversions';

type Props = {
  name: string;
};

export const BaseSprintfPlaceholderConversions: FC<Props> = (props) => {
  return (
    <>
      <PlaceholderConversion
        data={[
          percentSprintfConversionItem,
          stringSprintfConversionItem,
          numberSprintfConversionItem,
          floatSprintfConversionItem,
          scientificSprintfConversionItem,
        ]}
      />
      <SprintfPositionalArgumentsSupport name={props.name} />
    </>
  );
};

export const SprintfPositionalArgumentsSupport: FC<{ name: string }> = (
  props
) => {
  return (
    <>
      {props.name} also supports <code>n$</code> positional specifiers. They are
      converted to the zero-based argument index. E.g.{' '}
      <code>I am %2$@, and I have %1$lld dogs.</code> is converted to
      <code>{'I am {1} and I have {(0, number)} dogs'}</code>.
    </>
  );
};

export const percentSprintfConversionItem = {
  specifier: '%',
  icuType: 'N/A',
  example: '%%',
  exampleConverted: '%',
  note:
    "%% is the way how to render %, in ICU we don't have such concept, so we just add %. When exporting, the % is " +
    'converted back to %%.',
};

export const stringSprintfConversionItem = {
  specifier: 's',
  icuType: 'none',
  example: '%s',
  exampleConverted: '{0}',
};

export const numberSprintfConversionItem = {
  specifier: 'd',
  icuType: 'number',
  example: '%d',
  exampleConverted: '{0, number}',
};

export const floatSprintfConversionItem = {
  specifier: 'f',
  icuType: 'number, [precision string]',
  example: '%f',
  exampleConverted: '{0, number, 0.000000}',
  note:
    "By default %f uses 6 decimal places, that's why we convert it to the number with such precision. " +
    '%.2 f would be {0, number, 0.00} and so on.',
};

export const scientificSprintfConversionItem = {
  specifier: 'e',
  icuType: 'number, scientific',
  example: '%e',
  exampleConverted: '{0, number, scientific}',
  note: '%E is not supported',
};
