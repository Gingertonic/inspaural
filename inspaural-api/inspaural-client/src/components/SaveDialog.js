import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class SaveDialog extends Component {

  state = {
    name: "",
    redirect: false
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  saveAndClose = e => {
    e.preventDefault()
    this.props.updateInspauralName(e.target.nameInput.value)
    setTimeout(this.props.saveInspaural, 2000)
    this.setRedirect()
  }

  render = () => {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/my-inspaurals'/>;
    } else {
      return (
        <div className="save-dialog" onSubmit={this.saveAndClose}>
          <form>
            <input
              name="nameInput"
              type="text"
              ref="nameInput"
              defaultValue={this.props.currentName}
              onChange={e => this.handleChange(e)}
            />
            <input type="submit" value="Save" />
          </form>
        </div>
      )
    }
  }
}

export default SaveDialog
