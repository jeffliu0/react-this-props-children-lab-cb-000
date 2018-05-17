<<<<<<< HEAD

=======
>>>>>>> 86e5e09aef58ba6c95b19580f21c49bb1ab366fb
import React from 'react'

export default class ThemedDecorations extends React.Component{
  render(){
    const childrenWithWrapperDiv = React.Children.map(
      this.props.children, (child, i) => {
        return (
          React.cloneElement( child, {
<<<<<<< HEAD
          	className: this.props.theme
          })
=======
          	decorationNum: i
          }),

          <div className="some-component-special-class"> {child} </div>
>>>>>>> 86e5e09aef58ba6c95b19580f21c49bb1ab366fb
        )
      })

      return(
<<<<<<< HEAD
        <div>
=======
        <div className="some-component">
          <p> This component has {React.Children.count(
            this.props.children)} children. </p>
>>>>>>> 86e5e09aef58ba6c95b19580f21c49bb1ab366fb
            {childrenWithWrapperDiv}
        </div>
          )}
}
