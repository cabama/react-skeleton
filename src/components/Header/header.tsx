import * as React from "react";
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

export const headerStyle = {
  width: '100%',
  background: 'red'
}

export const FlatButtonStyle = {
  color: 'white',
  marginTop: '5px'
}


export class Header extends React.Component<any, any> {

  private redirect = (url: string) => {
    this.props.history.push(url)  
  }

  constructor(props: any, state: any) {
    super(props, state);
    (window as any).carlos = props
  }

  navButtons = () => {
    return (
      <div>
        <FlatButton
          label="Asturias"
          style={FlatButtonStyle}
          onClick={() => { this.redirect('hello') }}
        ></FlatButton>
        <FlatButton
          label="Cadi"
          style={FlatButtonStyle}
          onClick={() => {this.redirect('/')}}
        ></FlatButton>    
      </div>
    )
  }

  render() {
    return (
      <div style={headerStyle}>
        <AppBar
          title="Title"
          iconElementRight={ this.navButtons() }
        />
      </div>
    )
  }
}
