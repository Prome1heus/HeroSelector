import React from 'react';
import Statbar from './Statbar'
import tachyons from 'tachyons'

const Card = ({name, powerstats, id, slug}) => {
	return (
		<div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' style={{width: '300px', height: '400px', alignSelf: 'center'}}>
			<img alt={name} src={'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/' +slug +'.jpg'} style={{width: '100px', height: '100px'}}/>
			<div>
				<h3> {name} </h3>
				 {Object.keys(powerstats).map((key, i) => 
				 <Statbar value={powerstats[key]} name={key} />)
         		}
			</div>
		</div>
	);
}

export default Card;