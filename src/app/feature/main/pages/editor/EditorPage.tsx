import { selectUser, useAppSelector } from "../../../../store/hooks";

import Path from "../../../../model/Path";
import React from "react";
import { Redirect } from "react-router-dom";
import User from "../../../../model/User";

export default function EditorPage() {
  const { user } = useAppSelector(selectUser);

  return (
    <>
      <div>editorPage</div>
      {!User.isLoginUser(user) && <Redirect to={Path.LOGIN} />}
    </>
  );
}
