import React from 'react';

const LayoutController = class LayoutController extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   SideNavBar:this.props.SideNavBar,
    //   OffCanvas:this.props.OffCanvas,
    // }
    this.toggle = this.toggle.bind(this)
    this.setValue = this.setValue.bind(this)
    this.layoutActions = this.layoutActions.bind(this)
  }
  toggle(key) {
    if(!this.state[key]) {
      return this.setState({
        [key]:true
      })
    }
    this.setState({
      [key]: !this.state[key]
    });
  }
  setValue(key, value) {
    this.setState({
      [key]: value
    });
  }
  layoutActions(){
    return {
      toggle:this.toggle,
      setValue:this.setValue
    }
  }
  flattenRoutes(routes) {
    let _routes = [];
    if(!routes) return _routes;
    routes.forEach((route, i)=>{
      _routes.push(route)
      if(route.routes){
        _routes.push(...route.routes)
      }
    })
    return _routes;
  }
}
export default LayoutController;
