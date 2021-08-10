import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "132defaa-6fcc-483a-ab71-74a85f8d233f" },
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
  },
  mountPhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo)
    return instance.put('profile/photo', formData, {
      'Content-Type' : 'multipart/form-data' 
    })
  },
  saveProfile(profileData) {
    return instance.put('profile', profileData)
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login (email, password, rememberMe=true, captcha=null) {
    return instance.post('auth/login', {email, password, rememberMe, captcha})
  },
  logout () {
    return instance.delete('auth/login')
  }
}; 

export const securityAPI = {
  getCaptchaUrl () {
    return instance.get('security/get-captcha-url')
  }
}
