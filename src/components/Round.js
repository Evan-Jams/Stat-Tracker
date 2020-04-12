import React, {Component} from 'react'

class Round extends Component{
  render(){
    return(
      <>
        <form>
          <input type="date" name="play_date" />
          <input type="number" name="strokes1" />
          <input type="number" name="strokes2" />
          <input type="number" name="strokes3" />
          <input type="number" name="strokes4" />
          <input type="number" name="strokes5" />
          <input type="number" name="strokes6" />
          <input type="number" name="strokes7" />
          <input type="number" name="strokes8" />
          <input type="number" name="strokes9" />
          <input type="number" name="strokes10" />
          <input type="number" name="strokes11" />
          <input type="number" name="strokes12" />
          <input type="number" name="strokes13" />
          <input type="number" name="strokes14" />
          <input type="number" name="strokes15" />
          <input type="number" name="strokes16" />
          <input type="number" name="strokes17" />
          <input type="number" name="strokes18" />
          <input type="submit" value="Post Score" />
        </form>
      </>
    )
  }
}

export default Round
