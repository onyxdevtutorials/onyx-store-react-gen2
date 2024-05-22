import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === "authenticated") {
      navigate("/");
    }
  }, [authStatus]);

  return <Authenticator />;
};
export default SignIn;
