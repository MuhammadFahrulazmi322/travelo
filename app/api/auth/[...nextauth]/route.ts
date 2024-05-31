import { signIn, signInWithGoogle } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  email: string;
  password: string;
  fullname?: string;
  role?: string;
  name?: string;
  image?: string;
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user: any = await signIn({ email });
        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
      authorization: {
        params: {
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }
      if (account?.provider === "google") {
        const data = {
          email: user.email,
          fullname: user.name,
          image: user.image,
          type: "google",
        };
        await signInWithGoogle(data, (result: any) => {
          if (result.status) {
            token.email = result.data.email;
            token.fullname = result.data.fullname;
            token.image = result.data.image;
            token.type = result.data.type;
            token.role = result.data.role;
          }
        });
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("image" in token) {
        session.user.image = token.image;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, authOptions);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, authOptions);
}
