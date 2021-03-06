import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, requestUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getUsers, getCurrentPage, getTotalUsersCount, getFollowingInProgress, getIsFetching, getPageSize } from '../../redux/users-selectors';





class UsersContainer extends React.Component {
    
       
    componentDidMount () {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }
    
    render() {
        return (
        <>
        {this.props.isFetching ? <Preloader /> : null}    
        
        <Users currentPage={this.props.currentPage}
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        followingInProgress={this.props.followingInProgress} />
        </>
        )
    }
};


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};



export default compose(
    connect(mapStateToProps, {follow, unfollow, requestUsers})
)(UsersContainer);