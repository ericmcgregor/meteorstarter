import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from "../../../redux/store";
import {Table} from "reactstrap";
import {Link} from "react-router-dom";


class StoreList extends Component {
  render() {
    const data = store.getState()
    console.log(data)
    return (
      <div>
        <Table>
          <tbody>
          {
            Object.keys(data).map((key, i)=>{
              return (
                <tr key={i}>
                  <td><Link to={'/'+key}>{key}</Link></td>
                </tr>
              )
            })
          }

          </tbody>
        </Table>
      </div>
    );
  }
}

StoreList.propTypes = {};
StoreList.defaultProps = {};

export default StoreList;
