/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onCreateCartItem(filter: $filter, owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onCreateOrder(filter: $filter, owner: $owner) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onCreateOrderItem(filter: $filter, owner: $owner) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onCreateReview(filter: $filter, owner: $owner) {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
    onCreateSession(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onDeleteCartItem(filter: $filter, owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onDeleteOrder(filter: $filter, owner: $owner) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onDeleteOrderItem(filter: $filter, owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onDeleteReview(filter: $filter, owner: $owner) {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
    onDeleteSession(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onUpdateCartItem(filter: $filter, owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onUpdateOrder(filter: $filter, owner: $owner) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
    $owner: String
  ) {
    onUpdateOrderItem(filter: $filter, owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onUpdateReview(filter: $filter, owner: $owner) {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
    onUpdateSession(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
