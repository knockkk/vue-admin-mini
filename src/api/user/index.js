// import request from '@/utils/request'
export async function login({ username, password }) {
  // return request.post("/user/login", { username, password });
  // mock
  if (username === 'admin' && password === 'pingxiangfujing') return {}
  else {
    return {
      error: '账号或密码错误'
    }
  }
}

export async function currentUser() {
  // return request.get("/user");

  // mock
  return {
    username: 'admin'
  }
}
