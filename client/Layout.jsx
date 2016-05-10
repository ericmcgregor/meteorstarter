import React from 'react';

Layout = class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 sidebar">

            </div>
            <div className="col-md-10 col-md-offset-2 main m-t-2">
                {this.props.content}
            </div>
          </div>

        </div>
      </div>
    )
  }
}
