import { useState, useEffect, useCallback } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import {
  AsyncProcess,
  AsyncProcessStatus,
  UserCheckResult,
  UserCheckError,
} from "../types";

const useCheckUser = () => {
  const [userCheck, setUserCheck] = useState<
    AsyncProcess<UserCheckResult, UserCheckError>
  >({
    status: AsyncProcessStatus.NONE,
  });

  const checkUser = useCallback(async () => {
    setUserCheck({ status: AsyncProcessStatus.PENDING });

    try {
      const currentUser = await getCurrentUser();
      setUserCheck({
        status: AsyncProcessStatus.SUCCESS,
        value: { user: currentUser },
      });
    } catch (err) {
      setUserCheck({
        status: AsyncProcessStatus.SUCCESS,
        value: { user: null },
      });
    }
  }, []);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return { userCheck, checkUser };
};

export default useCheckUser;
