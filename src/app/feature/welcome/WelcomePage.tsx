import { selectUser, useAppSelector } from "../../store/hooks";

import React from "react";

export default function WelcomePage() {
  const { user } = useAppSelector(selectUser);
  return (
    <div>
      <h1>반갑습니다 {user.name} 님!</h1>
      <form>
        <label htmlFor="news-letter">{user.email}로 뉴스레터 받기</label>
        <input type="checkbox" name="news-letter" id="news-letter" />
      </form>
    </div>
  );
}
