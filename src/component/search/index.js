
import React ,{useState} from 'react';

const SearchBox= ({onsearchValue}) =>{
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  const onsearch=()=>{
      onsearchValue(searchValue);
      console.log(onsearchValue)
  }

return (
    

<div className ="input-group d-flex serach"> 
<div className= "form-outline">

<input type="search" id="form1" 
 value={searchValue}
onChange={(e)=>setSearchValue(e.target.value)}
 className="form-control some"/>

</div>
<button type="button" className="btn btn-primary"
 onClick={onsearch}>
<i className="fas fa-search"></i>
</button>
</div>
);
};
export default SearchBox;
