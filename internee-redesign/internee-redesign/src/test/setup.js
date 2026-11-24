import '@testing-library/jest-dom/vitest';

class IO { observe() {} unobserve() {} disconnect() {} }
globalThis.IntersectionObserver = globalThis.IntersectionObserver || IO;
window.scrollTo = () => {};
Element.prototype.scrollIntoView = () => {};
