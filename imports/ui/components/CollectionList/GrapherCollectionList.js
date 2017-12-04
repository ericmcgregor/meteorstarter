import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {Table} from "reactstrap";
import {compose} from "redux";
import {withQuery} from 'meteor/cultofcoders:grapher-react';
import {createQuery} from 'meteor/cultofcoders:grapher';
import {stopSubscription} from "meteor-redux-middlewares";
import {loadPosts, POSTS_SUB} from "../../../redux/posts/postActions";

const removePost = ({_id})=>{
    Meteor.call('posts.remove', {_id})
}

class GrapherCollectionList extends Component {
    componentDidMount() {
        this.props.loadPosts();
    }
    componentWillUnmount() {
        this.props.stopPostSubscription();
    }
    render() {
        console.log(this.props)
        return (
            <Table>
                <tbody>
                {this.props.posts.map((item, i)=>{
                    return (
                        <tr key={i}>
                            <td onClick={removePost.bind(this, {_id:item._id})}>{item.title}
                            <br/>
                            <small>{item.link ? 'link: ' + item.link.title : null}</small></td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
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

const GrapherCollectionListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GrapherCollectionList);

export default GrapherCollectionListContainer;


// const GrapherCollectionListContainer = compose(
//     withQuery((props) => {
//         return postsAll.clone();
//     }, {reactive:true}),
// )(GrapherCollectionList)
//
// export default GrapherCollectionListContainer;



