import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },

  groups: ["Admins"],

  /* 
  Username is more like an alias than a true identifier:
  - it can be changed
  - it cannot be used to sign in the user
  - it can be used as a display name for the user */
  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: false,
    },
  },
});
