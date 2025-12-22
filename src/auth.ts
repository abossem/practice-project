import NextAuth from "next-auth";

const authConfig = {
  providers: [],
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
