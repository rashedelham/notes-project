import React from 'react';
import { View, Text } from 'react-native';
import { Route, Switch } from 'react-router-native';

import AddNote from './addnote';
import EditNote from './editnote';
import Main from './main';



const Routes = function () {
    return (
        <Switch style={{flex: 1}}>
            <Route path="/" exact component={Main} />
            <Route path="/addnote" exact component={AddNote} />
            <Route path="/editnote" exact component={EditNote} />
            <Route component={Main} />
        </Switch>

    );
}

export default Routes;
