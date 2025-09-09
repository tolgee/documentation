import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Format =
  | 'ICU'
  | 'PHP_SPRINTF'
  | 'JAVA_STRING_FORMAT'
  | 'C_SPRINTF'
  | 'RUBY_SPRINTF'
  | 'APPLE_SPRINTF';

const formats: Record<Format, { name: string; link: string }> = {
  ICU: {
    name: 'ICU',
    link: '/platform/formats/message_placeholder_format#icu',
  },
  PHP_SPRINTF: {
    name: 'PHP sprintf',
    link: '/platform/formats/message_placeholder_format#php-sprintf',
  },
  JAVA_STRING_FORMAT: {
    name: 'Java String.format',
    link: '/platform/formats/message_placeholder_format#java-stringformat',
  },
  C_SPRINTF: {
    name: 'C sprintf',
    link: '/platform/formats/message_placeholder_format#c-sprintf',
  },
  RUBY_SPRINTF: {
    name: 'Ruby sprintf',
    link: '/platform/formats/message_placeholder_format#ruby-sprintf',
  },
  APPLE_SPRINTF: {
    name: 'Apple sprintf',
    link: '/platform/formats/message_placeholder_format#apple-sprintf',
  },
};

export const FormatList: FC<{
  formats: Format[];
}> = (props) => {
  const filteredFormats = props.formats.map((format) => formats[format]);
  return (
    <ul>
      {filteredFormats.map((format) => (
        <li key={format.name}>
          <Link to={format.link}>{format.name}</Link>
        </li>
      ))}
    </ul>
  );
};
