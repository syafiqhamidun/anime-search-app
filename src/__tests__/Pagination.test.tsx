import { describe, it, expect, vi } from 'vitest';
import Pagination from '../components/Pagination';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Pagination', () => {
  it('renders and triggers onChange', () => {
    const onChange = vi.fn();
    render(<Pagination current={2} total={5} onChange={onChange} />);
    expect(screen.getByText('Prev')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Prev'));
    expect(onChange).toHaveBeenCalledWith(1);
  });
});


