import React, {Component} from 'react';
import Card from './Card';
//import { robots } from './Robots'

class CardList extends Component {
	render(props){
		return (
		<div style={{display: 'flex',
  			flexWrap: 'wrap',
  			alignItems: 'center',
  			justifyContent: 'space-around'
  		}}>

         	{this.props.robots.map((user, i) => 
				 <Card 
				 	key={i} 
				 	id={this.props.robots[i].id} 
				 	powerstats={this.props.robots[i].powerstats} 
				 	name={this.props.robots[i].name} 
				 	slug={this.props.robots[i].slug} 
				 />)
         	} 
        </div>
        )
	}
	
}

export default CardList;