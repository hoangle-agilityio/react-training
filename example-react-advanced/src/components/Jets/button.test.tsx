import Button from './Button';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';

describe('Button component', () => {
  afterEach(cleanup);

  it('should be render button correctly', () => {
    const { getByTestId } = render(
      <Button className="button-add" buttonName="create recipe" />
    );
    expect(getByTestId('button').textContent).toBe('create recipe');
  });

  it('should be render button correctly', () => {
    const { getByTestId } = render(
      <Button className="button-add" buttonName="update recipe" />
    );
    expect(getByTestId('button').textContent).toBe('update recipe');
  });

  it('should be click event', () => {
    const onClick = jest.fn();
    render(<Button className="button-add" onClick={onClick} buttonName="create recipe" />);
    fireEvent.click(screen.getByText('create recipe'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
