import { useEffect, useState, useCallback } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import { AsyncProcess, AsyncProcessStatus } from "../types";

interface AdminCheckResult {
  isAdmin: boolean;
}

interface AdminCheckError {
  message: string;
}

const useAdminCheck = () => {
  const [adminCheck, setAdminCheck] = useState<
    AsyncProcess<AdminCheckResult, AdminCheckError>
  >({
    status: AsyncProcessStatus.NONE,
  });

  const checkIsAdmin = useCallback(async () => {
    setAdminCheck({ status: AsyncProcessStatus.PENDING });
    try {
      const session = await fetchAuthSession();
      console.log("session", session);
      const tokens = session.tokens;

      let isAdmin = false;

      if (tokens && Object.keys(tokens).length > 0) {
        const groups = tokens.accessToken.payload["cognito:groups"];
        isAdmin = Array.isArray(groups) && groups.includes("Admins");
      }

      setAdminCheck({
        status: AsyncProcessStatus.SUCCESS,
        value: { isAdmin },
      });
    } catch (error) {
      // console.error(
      //   `Error checking admin status or user cannot be an admin because not signed in: ${error}`
      // );
      setAdminCheck({
        status: AsyncProcessStatus.SUCCESS,
        value: {
          isAdmin: false,
        },
      });
    }
  }, []);

  useEffect(() => {
    checkIsAdmin();
  }, [checkIsAdmin]);

  return { adminCheck, checkIsAdmin };
};

export default useAdminCheck;
