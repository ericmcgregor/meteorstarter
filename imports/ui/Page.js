import React from 'react';
import {Meteor} from 'meteor/meteor';
import DefaultLayout from '/imports/ui/Layouts/DefaultLayout';
import DefaultNav from '/imports/ui/defaultComponents/DefaultNav';
import DefaultFormComponent from '/imports/ui/defaultComponents/DefaultFormComponent'
import DefaultTableComponent from '/imports/ui/defaultComponents/DefaultTableComponent'
import PivotTableComponent from '/imports/ui/defaultComponents/PivotTable/PivotTableComponent'
import DefaultTableActions from '/imports/ui/defaultComponents/DefaultTableActions'
import { Container, Row, Col, CardBlock, Card, CardHeader } from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Page = class Page extends React.Component {
  render() {
    if(this.props.loading) {return <div className="container">loading...</div>}
    return (
      <Router id="container-window">

            <DefaultLayout {...this.props}>
              <DefaultNav />

              <Route path="/basic" render={(match)=>{
                  return (
                    <CardBlock>
                      <DefaultTableActions {...this.props}/>

                      <DefaultTableComponent {...this.props} />
                      <hr>
                      </hr>

                      <Card className="my-3">
                        <CardHeader>
                          Scheam editor
                        </CardHeader>
                        <CardBlock>
                          <DefaultFormComponent {...this.props} />
                        </CardBlock>
                      </Card>

                    </CardBlock>
                  )
                }}/>

              <Route path="/pivot" render={(match)=>{
                    return (
                      <CardBlock>
                        <DefaultTableActions {...this.props}/>

                        <PivotTableComponent {...this.props} />


                      </CardBlock>
                    )
                  }}/>


            </DefaultLayout>


      </Router>
    )
  }
}

export default Page;
