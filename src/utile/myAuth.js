
// 保存到本地的登录信息
const TokenKey = 'token'
export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  // return Cookies.set(TokenKey, token)
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  // return Cookies.remove(TokenKey)
  return localStorage.removeItem(TokenKey)
}

// 保存个人信息
const UserInfo = 'userfin'

export function getUserInfo() {
  //   取值取出的是字符串，但需要的是对象数组， 所有要转换  JSON.parse()

  return JSON.parse(localStorage.getItem(UserInfo))
}

export function setUserInfo(token) {
  //  本地存储只能存字符串，需要将 数组转换成 字符串  JSON.stringify（）

  return localStorage.setItem(UserInfo, JSON.stringify(token))
}

export function removeUserInfo() {
  // return Cookies.remove(TokenKey)
  return localStorage.removeItem(UserInfo)
}
