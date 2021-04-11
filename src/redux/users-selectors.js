export const getUsers = (state) =>{
    return state.usersPage.users
}

export const getPageSize = (state) =>{
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) =>{
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) =>{
    return state.usersPage.currentPage
}

export const getQuantityButtons = (state) =>{
    return state.usersPage.quantityButtons
}

export const getFirstButton = (state) =>{
    return state.usersPage.firstButton
}

export const getIsFetching = (state) =>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) =>{
    return state.usersPage.followingInProgress
}