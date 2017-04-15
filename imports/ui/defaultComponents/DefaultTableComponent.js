import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Button, Popover, PopoverTitle, PopoverContent,
Modal, ModalHeader, ModalBody, ModalFooter,
Form, FormGroup, Label, Input, FormText,
Container, Row, Col} from 'reactstrap';

import DefaultFormComponent from './DefaultFormComponent'
import DefaultTableActions from './DefaultTableActions';
import ReactTable from 'react-table'
import { ReactTableDefaults } from 'react-table'

Object.assign(ReactTableDefaults, {
  showPagination:false,
  pageSize:1,
  getTheadThProps:()=>{
    return {
      style:{
        textAlign:"left"
      }
    }
  }
});

const DefaultTableComponent = class DefaultTableComponent extends React.Component {
  remove(collection, _id){
    collection.remove(_id)
  }
  edit(Store, model){
    Store.set('model', model);
  }
  columns(Collection){
    var columns = Collection.schema.objectKeys().slice(0);
    // columns.splice(columns.indexOf('created'), 1)

    columns = columns.map((key)=>{
      let result = {header:key, accessor:key}
      if(key=='keywords') {
        result.render = (result)=>{
          return result.value.map((keyword, i)=> <span key={i}>{keyword.name}, </span>)
        }
      }
      return result
    })

    columns.push({
      header:"options",
      render:(d)=>{
        return (
          <div className="text-center">
            <i className="fa fa-trash" onClick={this.remove.bind(this, Collection, d.row._id)}></i>
          </div>
        )
      }
    })

    return columns

  }
  render() {
    return (
      <div>
        <DefaultTableActions {...this.props}/>

        <ReactTable
            data={this.props.Data}
            columns={[
              {
                accessor:"picture.medium",
                width:70,
                render:({value, rowValues, row, index, viewIndex})=>{
                  console.log(value)
                  return (
                    <img src={value} className="avatar" style={{borderRadius:"50px", width:"45px", height:"45px"}}/>
                  )
                }
              },
              {
                id:"fullName",
                header:"name",
                accessor:(d)=>d.name.first +" "+ d.name.last
              },
              {
                id:"username",
                header:"username",
                accessor:"login.username"
              },
              {
                header:"cell",
                accessor:"cell"
              },
              {
                header:"options",
                render:(d)=>{
                  return (
                    <div className="text-center">
                      <i className="fa fa-trash" onClick={this.remove.bind(this, this.props.Collection, d.row._id)}></i>
                      <i className="fa fa-pencil" onClick={this.edit.bind(this, this.props.Store, d.row)}></i>
                    </div>
                  )
                }
              }
            ]}
            pageSize={this.props.Data.length}
          />


      </div>

    )
  }
}

export default DefaultTableComponent;
// this.columns(this.props.Collection)




// <hr/>
//
//
// <Table >
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>Title</th>
//       <th>description</th>
//       <th>Boolean</th>
//       <th>keywords</th>
//       <th></th>
//       <th></th>
//     </tr>
//   </thead>
//   <tbody>
//     {(()=>{
//       return this.props.Data.map((item, i)=>{
//         return (
//           <tr key={i}>
//             <th scope="row">{i}</th>
//             <td>{item.title}</td>
//             <td>{item.description}</td>
//             <td>{item.type}</td>
//             <td>{item.keywords.map((keyword, i)=>{
//                 return <span key={keyword.name+i}>{keyword.name}, </span>
//               })}</td>
//             <td style={{width:"50px"}}>
//               <Button onClick={this.edit.bind(this,item)} >
//                 <i className="fa fa-pencil"></i>
//               </Button>
//             </td>
//             <td style={{width:"50px"}}>
//               <Button onClick={this.remove.bind(this,this.props.Collection,item._id)} >
//                 <i className="fa fa-times"></i>
//               </Button>
//             </td>
//           </tr>
//         )
//       })
//     })()}
//   </tbody>
// </Table>
//
//
// <Modal isOpen={this.state.popoverOpen} toggle={this.toggle} >
//   <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//   <ModalBody>
//     <DefaultFormComponent {...this.props} />
//   </ModalBody>
//   <ModalFooter>
//     <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//     <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//   </ModalFooter>
// </Modal>
