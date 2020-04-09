import React, {useEffect} from 'react'

class Statbar extends React.Component {  

  constructor(props){
  	super();
  	this.canvas = React.createRef();
  }	

  fillRect(value){
  	const ctx = this.canvas.current.getContext("2d");
    ctx.clearRect(0, 0, 100, 5)
    ctx.fillStyle = "#0000FF"
    ctx.fillRect(0, 0, this.props.value, 5)
  }

  componentDidUpdate(props){
    this.fillRect(this.props.value);
  }

  componentDidMount(props){
  	this.fillRect(this.props.value);
  }

  render(props) {
    return(
      	<div style={{display: 'flex', justifyContent: 'space-between', margin: '5px'}}>
      		<p style={{fontSize: 10}}> {this.props.name} </p>
        	<canvas ref={this.canvas} width={100} height={5} style={{border: '1px solid black'}}/>
      	</div>
    )
  }
}

export default Statbar;