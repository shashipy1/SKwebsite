import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {

  // every time search/invoc the function
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('')

  // focus on search value
  React.useEffect(() => {
    searchValue.current.focus()
  })

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your fevorite cocktail</label>
          <input 
          type='text' 
          id='name' 
          ref={searchValue}
          onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm