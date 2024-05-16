/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $condition: ModelCartItemConditionInput
    $input: CreateCartItemInput!
  ) {
    createCartItem(condition: $condition, input: $input) {
      cartItemId
      createdAt
      owner
      product {
        createdAt
        description
        image
        name
        price
        productId
        stripePriceId
        stripeProductId
        updatedAt
        __typename
      }
      productId
      quantity
      session {
        createdAt
        expiresAt
        sessionId
        updatedAt
        userId
        __typename
      }
      sessionId
      updatedAt
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $condition: ModelOrderConditionInput
    $input: CreateOrderInput!
  ) {
    createOrder(condition: $condition, input: $input) {
      createdAt
      items {
        nextToken
        __typename
      }
      orderId
      owner
      status
      total
      updatedAt
      user {
        bio
        createdAt
        image
        owner
        updatedAt
        userId
        username
        __typename
      }
      userId
      __typename
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $condition: ModelOrderItemConditionInput
    $input: CreateOrderItemInput!
  ) {
    createOrderItem(condition: $condition, input: $input) {
      createdAt
      order {
        createdAt
        orderId
        owner
        status
        total
        updatedAt
        userId
        __typename
      }
      orderId
      orderItemId
      owner
      product {
        createdAt
        description
        image
        name
        price
        productId
        stripePriceId
        stripeProductId
        updatedAt
        __typename
      }
      productId
      quantity
      updatedAt
      __typename
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $condition: ModelProductConditionInput
    $input: CreateProductInput!
  ) {
    createProduct(condition: $condition, input: $input) {
      cartItems {
        nextToken
        __typename
      }
      createdAt
      description
      image
      name
      orderItems {
        nextToken
        __typename
      }
      price
      productId
      reviews {
        nextToken
        __typename
      }
      stripePriceId
      stripeProductId
      updatedAt
      __typename
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $condition: ModelReviewConditionInput
    $input: CreateReviewInput!
  ) {
    createReview(condition: $condition, input: $input) {
      content
      createdAt
      owner
      product {
        createdAt
        description
        image
        name
        price
        productId
        stripePriceId
        stripeProductId
        updatedAt
        __typename
      }
      productId
      rating
      reviewId
      updatedAt
      __typename
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $condition: ModelSessionConditionInput
    $input: CreateSessionInput!
  ) {
    createSession(condition: $condition, input: $input) {
      cartItems {
        nextToken
        __typename
      }
      createdAt
      expiresAt
      sessionId
      updatedAt
      user {
        bio
        createdAt
        image
        owner
        updatedAt
        userId
        username
        __typename
      }
      userId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $condition: ModelUserConditionInput
    $input: CreateUserInput!
  ) {
    createUser(condition: $condition, input: $input) {
      bio
      createdAt
      image
      orders {
        nextToken
        __typename
      }
      owner
      sessions {
        nextToken
        __typename
      }
      updatedAt
      userId
      username
      __typename
    }
  }
`;
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $condition: ModelCartItemConditionInput
    $input: DeleteCartItemInput!
  ) {
    deleteCartItem(condition: $condition, input: $input) {
      cartItemId
      createdAt
      owner
      product {
        createdAt
        description
        image
        name
        price
        productId
        stripePriceId
        stripeProductId
        updatedAt
        __typename
      }
      productId
      quantity
      session {
        createdAt
        expiresAt
        sessionId
        updatedAt
        userId
        __typename
      }
      sessionId
      updatedAt
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $condition: ModelOrderConditionInput
    $input: DeleteOrderInput!
  ) {
    deleteOrder(condition: $condition, input: $input) {
      createdAt
      items {
        nextToken
        __typename
      }
      orderId
      owner
      status
      total
      updatedAt
      user {
        bio
        createdAt
        image
        owner
        updatedAt
        userId
        username
        __typename
      }
      userId
      __typename
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $condition: ModelOrderItemConditionInput
    $input: DeleteOrderItemInput!
  ) {
    deleteOrderItem(condition: $condition, input: $input) {
      createdAt
      order {
        createdAt
        orderId
        owner
        status
        total
        updatedAt
        userId
        __typename
      }
      orderId
      orderItemId
      owner
      product {
        createdAt
        description
        image
        name
        price
        productId
        stripePriceId
        stripeProductId
        updatedAt
        __typename
      }
      productId
      quantity
      updatedAt
      __typename
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $condition: ModelProductConditionInput
    $input: DeleteProductInput!
  ) {
    deleteProduct(condition: $condition, input: $input) {
      cartItems {
        nextToken
        __typename
      }
      createdAt
      description
      image
      name
      orderItems {
        nextToken
        __typename
      }
      price
      productId
      reviews {
        nextToken
        __typename
      }
      stripePriceId
      stripeProductId
      updatedAt
      __typename
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $condition: ModelReviewConditionInput
    $input: DeleteReviewInput!
  ) {
    deleteReview(condition: $condition, input: $input) {
      content
      createdAt
      owner
      product {
        createdAt
        description
        image
        name
        price
        productId
        stripePriceId
        stripeProductId
        updatedAt
        __typename
      }
      productId
      rating
      reviewId
      updatedAt
      __typename
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $condition: ModelSessionConditionInput
    $input: DeleteSessionInput!
  ) {
    deleteSession(condition: $condition, input: $input) {
      cartItems {
        nextToken
        __typename
      }
      createdAt
      expiresAt
      sessionId
      updatedAt
      user {
        bio
        createdAt
        image
        owner
        updatedAt
        userId
        username
        __typename
      }
      userId
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $condition: ModelUserConditionInput
    $input: DeleteUserInput!
  ) {
    deleteUser(condition: $condition, input: $input) {
      bio
      createdAt
      image
      orders {
        nextToken
        __typename
      }
      owner
      sessions {
        nextToken
        __typename
      }
      updatedAt
      userId
      username
      __typename
    }
  }
`;
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $condition: ModelCartItemConditionInput
    $input: UpdateCartItemInput!
  ) {
    updateCartItem(condition: $condition, input: $input) {
      cartItemId
      createdAt
      owner
      product {
        createdAt
        description
        image
        name
        price
        productId
        stripePriceId
        stripeProductId
        updatedAt
        __typename
      }
      productId
      quantity
      session {
        createdAt
        expiresAt
        sessionId
        updatedAt
        userId
        __typename
      }
      sessionId
      updatedAt
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $condition: ModelOrderConditionInput
    $input: UpdateOrderInput!
  ) {
    updateOrder(condition: $condition, input: $input) {
      createdAt
      items {
        nextToken
        __typename
      }
      orderId
      owner
      status
      total
      updatedAt
      user {
        bio
        createdAt
        image
        owner
        updatedAt
        userId
        username
        __typename
      }
      userId
      __typename
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $condition: ModelOrderItemConditionInput
    $input: UpdateOrderItemInput!
  ) {
    updateOrderItem(condition: $condition, input: $input) {
      createdAt
      order {
        createdAt
        orderId
        owner
        status
        total
        updatedAt
        userId
        __typename
      }
      orderId
      orderItemId
      owner
      product {
        createdAt
        description
        image
        name
        price
        productId
        stripePriceId
        stripeProductId
        updatedAt
        __typename
      }
      productId
      quantity
      updatedAt
      __typename
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $condition: ModelProductConditionInput
    $input: UpdateProductInput!
  ) {
    updateProduct(condition: $condition, input: $input) {
      cartItems {
        nextToken
        __typename
      }
      createdAt
      description
      image
      name
      orderItems {
        nextToken
        __typename
      }
      price
      productId
      reviews {
        nextToken
        __typename
      }
      stripePriceId
      stripeProductId
      updatedAt
      __typename
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $condition: ModelReviewConditionInput
    $input: UpdateReviewInput!
  ) {
    updateReview(condition: $condition, input: $input) {
      content
      createdAt
      owner
      product {
        createdAt
        description
        image
        name
        price
        productId
        stripePriceId
        stripeProductId
        updatedAt
        __typename
      }
      productId
      rating
      reviewId
      updatedAt
      __typename
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $condition: ModelSessionConditionInput
    $input: UpdateSessionInput!
  ) {
    updateSession(condition: $condition, input: $input) {
      cartItems {
        nextToken
        __typename
      }
      createdAt
      expiresAt
      sessionId
      updatedAt
      user {
        bio
        createdAt
        image
        owner
        updatedAt
        userId
        username
        __typename
      }
      userId
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $condition: ModelUserConditionInput
    $input: UpdateUserInput!
  ) {
    updateUser(condition: $condition, input: $input) {
      bio
      createdAt
      image
      orders {
        nextToken
        __typename
      }
      owner
      sessions {
        nextToken
        __typename
      }
      updatedAt
      userId
      username
      __typename
    }
  }
`;
