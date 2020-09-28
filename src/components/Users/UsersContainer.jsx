import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, unfollow, setUsersTotalCount, onStackPagesChanged, toggleIsFetching } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(response.data.items);
      });
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
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      quantityButtons: state.usersPage.quantityButtons,
      firstButton: state.usersPage.firstButton,
      isFetching: state.usersPage.isFetching
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
   follow,
   unfollow, setUsers,
   setCurrentPage, setUsersTotalCount,
   onStackPagesChanged, toggleIsFetching
})(UsersContainer);