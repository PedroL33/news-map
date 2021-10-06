import { render, screen } from '@testing-library/react';
import Dashboard from '../dashboard';

test('it show spinner when loading', () => {
    const { container } = render(<Dashboard />)
    expect(container).toHaveTextContent('Loading')
});