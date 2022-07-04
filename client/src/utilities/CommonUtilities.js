export const getQueryString = ([searchParams]) => {
  return Object.fromEntries([...searchParams]);
};
