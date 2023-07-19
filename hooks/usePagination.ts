import { useState } from 'react';

export const usePagination = (totalPageRecords: number) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const totalPages = Math.ceil(totalPageRecords / 5);

  const endPageIndex = currentPageIndex * 5;
  const startPageIndex = endPageIndex - 5;

  return {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    setPage: setCurrentPageIndex,
  };
};
