import { useEffect, useState } from "react";
import { Hub } from "aws-amplify/utils";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { AsyncProcessStatus } from "../types";
import { useNavigate } from "react-router-dom";

const useAuthStatusUsingBroadcastChannel = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const channel = new BroadcastChannel("authStatusChannel");
  const navigate = useNavigate();

  useEffect(() => {
    channel.onmessage = (event) => {
      setIsSignedIn(event.data.isSignedIn);
    };

    if (authStatus !== "configuring") {
      const signedIn = authStatus === "authenticated";
      setIsSignedIn(signedIn);
      channel.postMessage(signedIn);
    }

    // return () => {
    //   channel.close();
    // };
  }, [authStatus]);

  useEffect(() => {
    const hubListenerCancelToken = Hub.listen(
      "auth",
      ({ payload: { event } }) => {
        console.log("auth event", event);
        switch (event) {
          case "signedIn":
            console.log("Hub says signedIn");
            // channel.postMessage(true);
            break;
          case "signedOut":
            console.log("Hub says signedOut");
            channel.postMessage({ isSignedIn: false });
            navigate("/");
            break;
          default:
            break;
        }
      }
    );

    return () => {
      hubListenerCancelToken();
    };
  }, []);

  return { isSignedIn };
};

export default useAuthStatusUsingBroadcastChannel;
