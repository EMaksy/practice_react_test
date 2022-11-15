import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewButton from './NewButton'

describe('NewButton', () => {

    it('has the the correct value', () => {
        const correctValue="click me";
        render (
            <NewButton/>
        );
        expect(screen.getByRole('button')).toHaveTextContent(correctValue);
    });

    it('has the color red', () => {
        const {container} = render (
            <NewButton/>
        );
        // screen object includes the whole rendered obj
        const element = screen.getByText('click me');
        const styles = getComputedStyle(element);
        //assert the text value of the button is correct
        expect(styles.backgroundColor).toBe('red');
    });

});