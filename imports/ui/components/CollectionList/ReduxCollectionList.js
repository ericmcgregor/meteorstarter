import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from "/imports/redux/store"
import {connect} from "react-redux"
import {Table} from "reactstrap";
import {compose} from "redux";


const ReduxCollectionListContainer =
  @connect((store) => {
    return {
      'defaults': store.defaults,
    };
  })
  class CollectionList extends Component {
    render() {
      return (
        <div>
          <Table>
            <tbody>
            {this.props.list.map((item, i)=>{
              return (
                <tr key={i}>
                  <td>{item.title}</td>
                </tr>
                )
            })}
            </tbody>
          </Table>
        </div>
      );
    }
  }

ReduxCollectionListContainer.propTypes = {};
ReduxCollectionListContainer.defaultProps = {};


// const ReduxCollectionListContainer = compose(
//   connect((store) => {
//     return {
//       'defaults': store.defaults,
//     };
//   })
// )(CollectionList);


export default ReduxCollectionListContainer;