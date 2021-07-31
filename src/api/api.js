import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "82a30656-4e4a-4e44-b90d-5e5d04cc6f09" },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId)
  },
  updateStatus(status) {
      return instance.put('profile/status', {status: status})
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login (email, password, rememberMe=true) {
    return instance.post('auth/login', {email, password, rememberMe})
  },
  logout () {
    return instance.delete('auth/login')
  }
}; 
