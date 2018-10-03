import React from 'react'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const TaskColumn = () => {
    return(
        <div className="tasks">
            {[1,2,3,4,5].map(val =>(
                <Button size="large" color="secondary" variant="contained" >Task {val}</Button>
                )
            )}
            <Button size="medium" color="primary" variant="contained" aria-label="Add">
                <AddIcon />
            </Button>
        </div>
    )
}

export default TaskColumn;