import { selectUser, useAppSelector } from "../../../../store/hooks";

import PageSection from "../../../../components/PageSection";
import Path from "../../../../shared/model/Path";
import React from "react";
import { Redirect } from "react-router-dom";
import User from "../../../../shared/model/User";

export default function EditorPage() {
  const { user } = useAppSelector(selectUser);

  return (
    <PageSection>
      <div>editorPage</div>
      {!User.isLoginUser(user) && <Redirect to={Path.LOGIN} />}
    </PageSection>
  );
}
