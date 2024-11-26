import {render, screen} from '@testing-library/react';
import {Button} from '@frontpile/button';

describe('Button', () => {
  it('renders', () => {
    render(<Button text="Click me" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
