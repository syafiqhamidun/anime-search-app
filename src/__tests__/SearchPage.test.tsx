import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { screen, fireEvent, act } from '@testing-library/react';
import { renderWithProviders } from '../test/utils';
import SearchPage from '../pages/SearchPage';

const mockResponse = {
  data: [],
  pagination: { last_visible_page: 1, has_next_page: false, current_page: 1, items: { count: 0, total: 0, per_page: 24 } }
};

describe('SearchPage', () => {
  const originalFetch = globalThis.fetch as any;
  beforeEach(() => {
    vi.useFakeTimers();
    (globalThis as any).fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => mockResponse } as any);
  });
  afterEach(() => {
    vi.useRealTimers();
    (globalThis as any).fetch = originalFetch;
  });

  it('debounces input by ~250ms and fetches once', async () => {
    renderWithProviders(<SearchPage />);
    vi.clearAllMocks();

    const input = screen.getByPlaceholderText(/search anime/i);
    fireEvent.change(input, { target: { value: 'nar' } });
    fireEvent.change(input, { target: { value: 'naru' } });
    fireEvent.change(input, { target: { value: 'narut' } });
    fireEvent.change(input, { target: { value: 'naruto' } });

    
    await act(async () => {
      await vi.advanceTimersByTimeAsync(200);
    });
    expect(globalThis.fetch).toHaveBeenCalledTimes(0);

    await act(async () => {
      await vi.advanceTimersByTimeAsync(100);
    });
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });
});


