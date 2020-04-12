import React, {Component} from 'react'

class Round extends Component{
  constructor(props){
    super(props)
    this.state = {
      play_date: '',
      strokes1: 0,
      strokes2: 0,
      strokes3: 0,
      strokes4: 0,
      strokes5: 0,
      strokes6: 0,
      strokes7: 0,
      strokes8: 0,
      strokes9: 0,
      strokes10: 0,
      strokes11: 0,
      strokes12: 0,
      strokes13: 0,
      strokes14: 0,
      strokes15: 0,
      strokes16: 0,
      strokes17: 0,
      strokes18: 0,
      user_id: sessionStorage.getItem('user')
    }
  }

  componentDidMount(){
    this.setState({
      play_date: this.state.play_date,
      strokes1: this.state.strokes1,
      strokes2: this.state.strokes2,
      strokes3: this.state.strokes3,
      strokes4: this.state.strokes4,
      strokes5: this.state.strokes5,
      strokes6: this.state.strokes6,
      strokes7: this.state.strokes7,
      strokes8: this.state.strokes8,
      strokes9: this.state.strokes9,
      strokes10: this.state.strokes10,
      strokes11: this.state.strokes11,
      strokes12: this.state.strokes12,
      strokes13: this.state.strokes13,
      strokes14: this.state.strokes14,
      strokes15: this.state.strokes15,
      strokes16: this.state.strokes16,
      strokes17: this.state.strokes17,
      strokes18: this.state.strokes18,
      user_id: this.state.user_id
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createRound(this.state)
  }
  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="date" name="play_date" onChange={this.handleChange} />
          <input type="number" name="strokes1" onChange={this.handleChange} />
          <input type="number" name="strokes2" onChange={this.handleChange} />
          <input type="number" name="strokes3" onChange={this.handleChange} />
          <input type="number" name="strokes4" onChange={this.handleChange} />
          <input type="number" name="strokes5" onChange={this.handleChange} />
          <input type="number" name="strokes6" onChange={this.handleChange} />
          <input type="number" name="strokes7" onChange={this.handleChange} />
          <input type="number" name="strokes8" onChange={this.handleChange} />
          <input type="number" name="strokes9" onChange={this.handleChange} />
          <input type="number" name="strokes10" onChange={this.handleChange} />
          <input type="number" name="strokes11" onChange={this.handleChange} />
          <input type="number" name="strokes12" onChange={this.handleChange} />
          <input type="number" name="strokes13" onChange={this.handleChange} />
          <input type="number" name="strokes14" onChange={this.handleChange} />
          <input type="number" name="strokes15" onChange={this.handleChange} />
          <input type="number" name="strokes16" onChange={this.handleChange} />
          <input type="number" name="strokes17" onChange={this.handleChange} />
          <input type="number" name="strokes18" onChange={this.handleChange} />
          <input type="submit" value="Post Score" onChange={this.handleChange} />
        </form>
      </>
    )
  }
}

export default Round
