# User Flow

System that uses pseudo-user based on IP for analytics and GDPR. All a visitor will see is the cookie banner. If user rejects cookies, no data will be collected.

- **Client:** User accesses any valid app route > called from [app/layout.tsx](/app/layout.tsx)
- **Client:** Check `userContext` for `userLoggedIn`
- **Client:** `userLoggedIn` returns `false`
  - **Client:** Check user cookies for `[domain]-user`
  - **Client:** `[domain]-user` does not exist
    - **Client:** Wait for user to interact with cookie banner.
      - **Client:** User rejects all but essentials
        - **Client:** Set `[domain]-user` to rejected
      - **Client:** User accepts essentials and analytics
        - **Client:** Make POST request to `/api/user`
        - **Server: `/api/user`** Read `user_IP` and try to create new user with `user_id` = `user_IP`
        - **Server: `/api/user`** Error: user already exists - make request to `/api/user[user_IP]`
          - **Server: `/api/user`** Set response header cookies `[domain]-user` with user data
          - **Server: `/api/user`** Return response 200
        - **Server: `/api/user`** Any other error
          - **Server: `/api/user`** Return response 400/500
        - **Server: `/api/user`** User created successfully
          - **Server: `/api/user`** Set response header cookies `[domain]-user` with user data
          - **Server: `/api/user`** Return response 201
          - **Client:** Set `userContext` with user data
  - **Client:** `[domain]-user` does exist
    - **Client:** Parse cookie and set `userContext` with user data
