import { render, screen } from '@testing-library/react';
import Map from '../map';

test('It the map without crashing.', () => {
    render(<Map />)
    expect(
        screen.getAllByTestId("map").toBeInTheDocument()
    )
})
