import AuthForm from "./AuthForm";
import PageSection from "../../../../components/PageSection";
import Path from "../../../../model/Path";
import React from "react";
import { Redirect } from "react-router-dom";

export default function SignUpPage() {
  return (
    <PageSection>
      <AuthForm
        type="register"
        onSubmit={() => {}}
        onSuccessGoogle={(response) => {}}
        onFailGoogle={() => {}}
      />
    </PageSection>
  );
}
