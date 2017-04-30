import React from 'react';


const NavHoverController = class NavHoverController extends React.Component {
  constructor(){
    super();
    this.state={
      popoverOpen:true
    }
    this.toggle=this.toggle.bind(this)
    this.leave = this.leave.bind(this)
    this.stayOpen = this.stayOpen.bind(this)
    this.enter = this.enter.bind(this)
    this.close = this.close.bind(this)
  }
  toggle(key, val) {
    this.setState({
      [key]: val,
      active: key
    });
  }
  enter(key){
    if(key!==this.state.active) {
      this.close(this.state.active);
    }
    this.toggle(key,true)
  }
  leave(key){
    var id = setTimeout(this.close.bind(this, key), 300);
    this.setState({timeOut:id})
  }
  close(key){
    this.setState({[key]:null, timeOut:null})
  }
  stayOpen(key){
    clearTimeout(this.state.timeOut)
  }
}

export default NavHoverController;
