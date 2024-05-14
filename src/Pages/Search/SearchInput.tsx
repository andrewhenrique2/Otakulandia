import React, { useState } from "react";
import useDebounce from "./useDebounced";
const SearchInput = ({ value, onChange }) => {

    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);

    function handleChange(event) {
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
    }

    
    return (
        <div className="Search">
    <input 
    placeholder="Buscar..."
    className="inputsearch"
    type="search" 
    value={displayValue} 
    onChange={handleChange}
    />
    </div>
    );
};
  export default SearchInput;