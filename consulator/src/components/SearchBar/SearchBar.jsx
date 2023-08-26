import React, { useEffect, useState } from "react";
import "../SearchBar/SearchBar.scss"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
const SearchBar = () => {
  const [productdata, setProductdata] = useState([]);
  const [filter, setFilter] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const productdata = async () => {
      try {
        const req = await fetch("https://fakestoreapi.com/products");
        const res = await req.json();
        setProductdata(res);
        setFilter(res);
      } catch (error) {
        console.log(error);
      }
    };
    productdata();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
    const result = productdata.filter((item) => {
      return item.title.toLowerCase().includes(query.toLocaleLowerCase());
    });
    setFilter(result);
  };
  return (
    <React.Fragment>
      <div className="searchbar-comp">
        <form>
          <input type="text" className="formcontrol" onChange={(e)=>handleInput(e)} />
         <h3><SearchSharpIcon/></h3>
        </form>
        <div className="searchshow">
          {query.length > 0 &&
            filter.map((pdata, index) => <p key={index}>{pdata.title}</p>)}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
