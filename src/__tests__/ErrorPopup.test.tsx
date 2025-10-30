import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPopup from '../components/ErrorPopup';

describe('ErrorPopup', () => {
  it('shows message and closes', () => {
    const onClose = vi.fn();
    render(<ErrorPopup message="Something went wrong" onClose={onClose} />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });
});


