import { render } from '@testing-library/react';
import React from 'react';
import Phonebook from './Phonebook';

describe('Phonebook', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Phonebook {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Phonebook')).toBeTruthy();
    });
});
