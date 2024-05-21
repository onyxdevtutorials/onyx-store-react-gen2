import { useEffect, useState } from "react";
import { Hub } from "aws-amplify/utils";
import { useAuthenticator } from "@aws-amplify/ui-react";

const useAuthStatusUsingLocalStorage = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    if (authStatus !== "configuring") {
      setIsSignedIn(authStatus === "authenticated");
      localStorage.setItem(
        "isSignedIn",
        String(authStatus === "authenticated")
      );
    }
  }, [authStatus]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "isSignedIn") {
        setIsSignedIn(event.newValue === "true");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const hubListenerCancelToken = Hub.listen(
      "auth",
      ({ payload: { event } }) => {
        console.log("auth event", event);
        switch (event) {
          case "signedIn":
            console.log("Hub says signedIn");
            localStorage.setItem("isSignedIn", "true");
            break;
          case "signedOut":
            console.log("Hub says signedOut");
            localStorage.setItem("isSignedIn", "false");
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

export default useAuthStatusUsingLocalStorage;
