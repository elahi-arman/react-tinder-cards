import React from 'react'
import {Card} from './Card'

export class CardComponent extends React.Component {
  state = {
    background: 'white',
    inmotion: false,
    rotatePercentage: 0,
    xTranslation: 0,
    yTranslation: 0,
    originalX: 0,
    originalY: 0
  }

  constructor(props){
    super(props)
    this.startMoving = this.startMoving.bind(this)
    this.stopMoving = this.stopMoving.bind(this)
    this.mouseMoving = this.mouseMoving.bind(this)
  }

  startMoving(event){
    this.setState({
      inmotion: true,
      originalX: event.clientX,
      originalY: event.clientY,
    })
  }

  mouseMoving(event){
    if (this.state.inmotion){
      let background;
      let xDifference = event.clientX - this.state.originalX
      let isNegative = xDifference < 0
      xDifference = Math.abs(xDifference)
      let opacityPercentage = xDifference / event.currentTarget.clientWidth;

      if (xDifference > 25){
        if (!isNegative){
            background = `rgba(46, 204, 113, ${opacityPercentage * 2})`
        } else if (isNegative){
            background = `rgba(231, 76, 60, ${opacityPercentage * 2})`
        }

        this.setState({
          background,
          rotatePercentage: isNegative ? opacityPercentage * -1 : opacityPercentage,
          xTranslation: isNegative ? xDifference * -1 : xDifference,
          yTranslation: xDifference * -0.8
        })
      }

      event.stopPropagation()
    }
  }

  stopMoving(event){
    this.setState({
      inmotion: false,
      rotatePercentage: 0,
      background: 'white',
      xTranslation: 0,
      yTranslation: 0
    })
  }


  render() {
    return (
      <Card
        onMouseDown={this.startMoving}
        onMouseMove={this.mouseMoving}
        onMouseUp={this.stopMoving}
        onMouseOut={this.stopMoving}
        background={this.state.background}
        inmotion={this.state.inmotion}
        rotatePercentage={this.state.rotatePercentage}
        xTranslation={this.state.xTranslation}
        yTranslation={this.state.yTranslation} >
          {this.props.children}
        </Card>
    );
  }
}
