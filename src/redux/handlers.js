export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};

export const handleRefreshUserRejected = state => {
  state.isRefreshing = false;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

export const handleGetAllContactsFulfilled = (state, action) => {
  handleFulfilled(state, action);
  state.items = action.payload;
};

export const handleAddContactFulfilled = (state, action) => {
  handleFulfilled(state, action);
  state.items.push(action.payload);
};

export const handleDeleteContactFulfilled = (state, action) => {
  handleFulfilled(state, action);
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

export const handleRegisterFulfilled = (state, action) => {
  const { user, token } = action.payload;
  state.user = user;
  state.token = token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

export const handleLogInFulfilled = handleRegisterFulfilled;

export const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
};

export const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};
