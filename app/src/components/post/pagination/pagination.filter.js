const FilterPagination = () => {
  return (input, start) => {
    start += start
    return input.slice(start)
  }
}

export default FilterPagination