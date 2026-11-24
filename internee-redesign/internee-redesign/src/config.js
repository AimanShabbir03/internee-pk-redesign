// Simulated network delay so skeleton loaders are visible. Zero while testing.
export const DELAY = import.meta.env.MODE === 'test' ? 0 : 700;
export const SUBMIT_DELAY = DELAY ? 900 : 0;
