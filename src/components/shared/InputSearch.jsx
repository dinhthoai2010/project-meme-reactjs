import React from 'react';

const InputSearch = ({keySearch, onChange}) => {

    return (
        <label>
            <input type="search" name="q" value={keySearch}
                onChange={onChange} className="form-control" 
                placeholder="Nhập từ khóa ..." />
            <i className="icon-Search" />
        </label>
    );
};

export default InputSearch;