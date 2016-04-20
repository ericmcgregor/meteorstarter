import React from 'react';

Foo = class Foo extends React.Component {
  componentDidMount(){
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
