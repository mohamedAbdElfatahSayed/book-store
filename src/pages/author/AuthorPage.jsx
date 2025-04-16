import { useState } from 'react';
import { authors } from '../../data/authors';
import './author.css'
const AuthorPage = () => {
    const [search,setSearch]=useState("")
    console.log(authors.filter(a=>(a.name).toLowerCase().includes(search)))
    return ( <div className="authors">
        <div className="authors-search-wrapper">
            <input type="search" placeholder='search on authors' value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
        <div className="authors-wrapper">
            {authors.filter(a=>(a.name).toLowerCase().includes(search))
            .map(author=>
                <div key={author.id} className="author">
                    <img src={author.image} alt={author.name} className="author-image" />
                    <h2>{author.name}</h2>
                </div>
            )}
        </div>
    </div> );
}
 
export default AuthorPage;