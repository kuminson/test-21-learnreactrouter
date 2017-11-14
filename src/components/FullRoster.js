import React, { Component } from 'react';
import Immutable from 'immutable';

class FullRoster extends Component{
    render(){
        let $map1 = Immutable.Map({a:1, b:3});
        let $map2 = $map1.set('a', 2);
        return (
            <div>
                <h3>this is all rosters</h3>
                <p>{"$map1:"+$map1.get("a")+"\n$map2:"+$map2.get("a")}</p>
            </div>
        );
    }
}

export default FullRoster;