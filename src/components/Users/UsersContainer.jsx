import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, onStackPagesChanged, requestUsers, toggleFollowingProgress } from '../../redux/users-reducer';
import {
   getUsers, getPageSize, getTotalUsersCount, getCurrentPage,
   getQuantityButtons, getFirstButton, getIsFetching, getFollowingInProgress
} from '../../redux/users-selectors';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);

   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.requestUsers(pageNumber, this.props.pageSize);
   }

   render() {

      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            onStackPagesChanged={this.props.onStackPagesChanged}
            users={this.props.users}
            quantityButtons={this.props.quantityButtons}
            firstButton={this.props.firstButton}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}

// let mapStateToProps = (state) => {
//    return {
//       users: state.usersPage.users,
//       pageSize: state.usersPage.pageSize,
//       totalUsersCount: state.usersPage.totalUsersCount,
//       currentPage: state.usersPage.currentPage,
//       quantityButtons: state.usersPage.quantityButtons,
//       firstButton: state.usersPage.firstButton,
//       isFetching: state.usersPage.isFetching,
//       followingInProgress: state.usersPage.followingInProgress
//    }
// }
let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      quantityButtons: getQuantityButtons(state),
      firstButton: getFirstButton(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}
// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followAC(userId));
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId));
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users));
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPageAC(pageNumber));
//       },
//       setUsersTotalCount: (totalCount) => {
//          dispatch(setUsersTotalCountAC(totalCount));
//       },
//       onStackPagesChanged: (direction, pagesCount) => {
//          dispatch(onStackPagesChangedAC(direction, pagesCount));
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingAC(isFetching));
//       }
//    }
// }

export default connect(mapStateToProps, {
   follow, unfollow,
   setCurrentPage, onStackPagesChanged,
   toggleFollowingProgress, requestUsers: requestUsers
})(UsersContainer);