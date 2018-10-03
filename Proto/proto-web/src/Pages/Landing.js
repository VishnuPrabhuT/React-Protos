import React, { Component } from 'react';
import StoreColumn from '../Components/StoreColumn';
import TaskColumn from '../Components/TaskColumn';
import { Grid, Tabs, Tab, AppBar } from '@material-ui/core';
//import Divider from '@material-ui/core/Divider';




class Landing extends Component{
render(){
return(
<div className="container">
    <Grid container>
        <div className="main-grid">
            <Grid item lg={0.5}>
                <StoreColumn />
            </Grid>
            <Grid item lg={11}>
                <Grid container>
                    <Grid item lg={12}>
                        <AppBar position="static">
                            <Tabs>
                                <Tab label="Item One" />
                                <Tab label="Item Two" />
                                <Tab label="Item Three" href="#basic-tabs" />
                            </Tabs>
                        </AppBar>
                    </Grid>
                </Grid>
                <Grid container lg={12}>
                    <Grid item lg={2}>
                        <TaskColumn />
                    </Grid>
                </Grid>
            </Grid>
        </div>

    </Grid>
</div>
);
}
}

export default Landing;