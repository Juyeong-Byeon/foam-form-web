interface User {
  idx: number;
  username: string;
  email: string;
}

namespace User {
  export function isLoginUser(user: User) {
    return user?.idx > 0;
  }
}

export default User;
