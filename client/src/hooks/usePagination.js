
export const usePagination=(data, itemsPerPage)=> {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
  // console.log(data)
  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
    if (currentPage == 0) setCurrentPage(1);
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    if (currentPage == 0) setCurrentPage(1);
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
    if (currentPage == 0) setCurrentPage(1);
  }

  return { next, prev, jump, currentData, currentPage, maxPage, setCurrentPage };
}