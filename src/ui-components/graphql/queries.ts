/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCartItem = /* GraphQL */ `
  query GetCartItem($cartItemId: ID!) {
    getCartItem(cartItemId: $cartItemId) {
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
export const getOrder = /* GraphQL */ `
  query GetOrder($orderId: ID!) {
    getOrder(orderId: $orderId) {
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
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($orderItemId: ID!) {
    getOrderItem(orderItemId: $orderItemId) {
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
export const getProduct = /* GraphQL */ `
  query GetProduct($productId: ID!) {
    getProduct(productId: $productId) {
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
export const getReview = /* GraphQL */ `
  query GetReview($reviewId: ID!) {
    getReview(reviewId: $reviewId) {
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
export const getSession = /* GraphQL */ `
  query GetSession($sessionId: ID!) {
    getSession(sessionId: $sessionId) {
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
export const getUser = /* GraphQL */ `
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
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
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $cartItemId: ID
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCartItems(
      cartItemId: $cartItemId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        cartItemId
        createdAt
        owner
        productId
        quantity
        sessionId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
    $orderItemId: ID
    $sortDirection: ModelSortDirection
  ) {
    listOrderItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      orderItemId: $orderItemId
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        orderId
        orderItemId
        owner
        productId
        quantity
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $orderId: ID
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      orderId: $orderId
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        orderId
        owner
        status
        total
        updatedAt
        userId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $productId: ID
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      productId: $productId
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $reviewId: ID
    $sortDirection: ModelSortDirection
  ) {
    listReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      reviewId: $reviewId
      sortDirection: $sortDirection
    ) {
      items {
        content
        createdAt
        owner
        productId
        rating
        reviewId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $sessionId: ID
    $sortDirection: ModelSortDirection
  ) {
    listSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sessionId: $sessionId
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        expiresAt
        sessionId
        updatedAt
        userId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $userId: ID
  ) {
    listUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      userId: $userId
    ) {
      items {
        bio
        createdAt
        image
        owner
        updatedAt
        userId
        username
        __typename
      }
      nextToken
      __typename
    }
  }
`;
