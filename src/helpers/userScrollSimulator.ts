export const userScrollSimulator = () => {
  window.scrollBy({ top: 15, left: 0, behavior: 'smooth' });
  setTimeout(userScrollSimulator, 350);
};
