import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Product: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      description: a.string(),
      price: a.integer().required(),
      image: a.string(),
      // stripePriceId: a.string(),
      // stripeProductId: a.string(),
      // cartItems: a.hasMany("CartItem", "productId"),
      // orderItems: a.hasMany("OrderItem", "productId"),
      // reviews: a.hasMany("Review", "productId"),
    })
    .authorization((allow) => [
      // "guest" = Cognito unauthenticated role
      allow.guest().to(["read"]),
      allow.authenticated().to(["read"]),
      allow.group("Admins").to(["create", "read", "update", "delete"]),
    ]),

  // Review: a
  //   .model({
  //     reviewId: a.id().required(),
  //     productId: a.id(),
  //     content: a.string().required(),
  //     rating: a.integer().required(),
  //     owner: a
  //       .string()
  //       .authorization((allow) => allow.owner().to(["read", "delete"])),
  //     product: a.belongsTo("Product", "productId"),
  //   })
  //   .identifier(["reviewId"])
  //   .authorization((allow) => [
  //     allow.guest().to(["read"]),
  //     allow.authenticated().to(["read"]),
  //     allow.group("Admins"),
  //     allow.owner(),
  //   ]),

  // User: a
  //   .model({
  //     userId: a.id().required(),
  //     username: a.string(),
  //     bio: a.string(),
  //     image: a.string(),
  //     sessions: a.hasMany("Session", "userId"),
  //     orders: a.hasMany("Order", "userId"),
  //   })
  //   .identifier(["userId"])
  //   .authorization((allow) => [
  //     allow.guest().to(["read"]),
  //     allow.owner().to(["read", "update"]),
  //     allow.authenticated().to(["read"]),
  //     allow.group("Admins"),
  //   ]),

  // Session: a
  //   .model({
  //     sessionId: a.id().required(),
  //     userId: a.id(),
  //     expiresAt: a.datetime().required(),
  //     user: a.belongsTo("User", "userId"),
  //     cartItems: a.hasMany("CartItem", "sessionId"),
  //   })
  //   .identifier(["sessionId"])
  //   .authorization((allow) => [
  //     allow.guest().to(["read"]),
  //     allow.authenticated().to(["read"]),
  //     allow.group("Admins"),
  //   ]),

  // CartItem: a
  //   .model({
  //     cartItemId: a.id().required(),
  //     sessionId: a.id(),
  //     productId: a.id(),
  //     quantity: a.integer().required(),
  //     session: a.belongsTo("Session", "sessionId"),
  //     product: a.belongsTo("Product", "productId"),
  //     owner: a
  //       .string()
  //       .authorization((allow) => allow.owner().to(["read", "delete"])),
  //   })
  //   .identifier(["cartItemId"])
  //   .authorization((allow) => [
  //     allow.guest(),
  //     allow.authenticated(),
  //     allow.group("Admins"),
  //   ]),

  // OrderItem: a
  //   .model({
  //     orderItemId: a.id().required(),
  //     orderId: a.id(),
  //     productId: a.id(),
  //     quantity: a.integer().required(),
  //     order: a.belongsTo("Order", "orderId"),
  //     product: a.belongsTo("Product", "productId"),
  //   })
  //   .identifier(["orderItemId"])
  //   .authorization((allow) => [allow.owner(), allow.group("Admins")]),

  // Order: a
  //   .model({
  //     orderId: a.id().required(),
  //     userId: a.id(),
  //     user: a.belongsTo("User", "userId"),
  //     total: a.integer(),
  //     items: a.hasMany("OrderItem", "orderId"),
  //     owner: a
  //       .string()
  //       .authorization((allow) => allow.owner().to(["read", "delete"])),
  //     status: a.enum([
  //       "PENDING",
  //       "IN_PROGRESS",
  //       "SHIPPED",
  //       "DELIVERED",
  //       "CANCELLED",
  //     ]),
  //   })
  //   .identifier(["orderId"])
  //   .authorization((allow) => [allow.owner(), allow.group("Admins")]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
