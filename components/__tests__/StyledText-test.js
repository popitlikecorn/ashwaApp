import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { StyledText } from '../StyledText';

describe('StyledText', () => {
  it('renders correctly', () => {
    const { getByText } = render(<StyledText>Hello</StyledText>);
    expect(getByText('Hello')).toBeTruthy();
  });
});
