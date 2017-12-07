import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {Container, Table} from "reactstrap";
import {compose} from "redux";
import {createQuery} from 'meteor/cultofcoders:grapher';
import {stopSubscription} from "meteor-redux-middlewares";
import {loadPosts, POSTS_SUB} from "../../../redux/posts/postActions";
import {Link} from "react-router-dom";


class GrapherCollectionList extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  componentWillUnmount() {
    this.props.stopPostSubscription();
  }
  render() {
    console.log(this.props)
    if(!this.props.ready) return <div>loading...</div>

    const post = this.props.posts[0]
    return (
      <Container fluid>
        <div className="d-flex py-3">
          <div>
            <div>
              <small><Link to={"/"}>store</Link> / {this.props.match.params.collectionId}</small>
            </div>
            <h3>{this.props.match.params.collectionId}</h3>
          </div>
          <div className="ml-auto">
            {/*<Button onClick={addPost}>Add Post</Button>*/}
          </div>
        </div>

      <Table striped>
        <thead>
        <tr>
          {Object.keys(this.props.posts[0]).map((key,i)=>{
            return (
              <th key={i}>{key}</th>
            )
          })}

        </tr>
        </thead>
        <tbody>
        {this.props.posts.map((item,i)=>{
          return (
            <tr key={i}>
              {Object.keys(item).map((key,i)=>{
                if(_.isArray(item[key])){
                  return <td key={i}>{item[key].length}</td>
                }
                if(_.isObject(item[key])){
                  return <td key={i}>Obj</td>
                }

                return (
                  <td key={i}>{item[key]}</td>
                )
              })}

            </tr>
          )
        })}
        </tbody>

      </Table>
      </Container>
    );
  }
}

GrapherCollectionList.propTypes = {};
GrapherCollectionList.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.posts
  }
};

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPosts()),
  stopPostSubscription: () => dispatch(stopSubscription(POSTS_SUB)),
});

const CollectionPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GrapherCollectionList);

export default CollectionPageContainer;


// const GrapherCollectionListContainer = compose(
//     withQuery((props) => {
//         return postsAll.clone();
//     }, {reactive:true}),
// )(GrapherCollectionList)
//
// export default GrapherCollectionListContainer;



