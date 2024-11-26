import {render, screen} from '@testing-library/react';
import {Button} from './Button';

describe('Button', () => {
  it('renders', () => {
    render(<Button text="Click me" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
