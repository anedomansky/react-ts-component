import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('Renders the Button component', () => {
    const { container } = render(<Button label="Test" />);
    expect(container).toBeInTheDocument();
});
