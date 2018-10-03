import React from 'react'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const StoreColumn = () => {
    return(
        <div className="stores">
            {[1,2,3,4,5].map(val =>(
                <Button size="medium" color="primary" variant="contained" >Store {val}</Button>
                )
            )}
            <Button size="medium" color="primary" variant="fab" aria-label="Add">
                <AddIcon />
            </Button>
        </div>
    )
}

export default StoreColumn;