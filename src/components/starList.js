import React, { Component } from 'react';

class StarList extends Component {
    constructor(){
        super();
    }//end contructor

    render(){
        const listItems = [];
        //for(let i = 0; i <this.state.starList.length; i += 1){
          //const star = this.state.starList[i];
        //}long hand for below loop 
        for(const star of this.props.starList) {
          listItems.push(<li key={star.name}>{star.name}: {star.diameter}</li>)
        }
        return (
            <div>
                My Star List: 
                <ul>
                    {listItems}
                </ul>
            </div>
        );//end return
    }//end render
}//end class

export default StarList;