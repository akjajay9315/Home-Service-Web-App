// import NextAuth from "next-auth/next";


// export const authOptions = {
//   providers: [
//     {
//       id: "descope",
//       name: "Descope",
//       type: "oauth",
//       // wellKnown: `https://api.descope.com/`+process.env.DESCOPE_API+`/.well-known/openid-configuration`,
//       wellKnown: `https://api.descope.com/P2rLHSgulXpeelzQKToJxqLue5Vr/.well-known/openid-configuration`,
//       authorization: { params: { scope: "openid email profile" } },
//       idToken: true,
//         // clientId: process.env.DESCOPE_CLIENT_ID,
//       clientId: "P2rLHSgulXpeelzQKToJxqLue5Vr",
//         // clientSecret: "<Descope Access Key>",
//       clientSecret: "P2rLHSgulXpeelzQKToJxqLue5Vr",
//       checks: ["pkce", "state"],
//       profile(profile) {
//         return {
//           id: profile.sub,
//           name: profile.name,
//           email: profile.email,
//           image: profile.picture,
//         };
//       },
//     },
//   ],
// };  


// const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST }


  import NextAuth from "next-auth/next";

  export const authOptions = {
    providers: [
      {
        id: "descope",
        name: "Descope",
        type: "oauth",
        wellKnown: `https://api.descope.com/`+process.env.DESCOPE_API+`/.well-known/openid-configuration`,
        // wellKnown: `https://api.descope.com/P2rLHSgulXpeelzQKToJxqLue5Vr/.well-known/openid-configuration`,
        authorization: { params: { scope: "openid email profile" } },
        idToken: true,
        clientId: process.env.DESCOPE_CLIENT_ID,
        // clientId: "P2rLHSgulXpeelzQKToJxqLue5Vr",
        // clientSecret: "<Descope Access Key>",
        clientSecret: process.env.DESCOPE_CLIENT_SECRET,

        checks: ["pkce", "state"],
        profile(profile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            image: profile.picture,
          };
        },
      },
    ],
  };

  const handler = NextAuth(authOptions);

  export { handler as GET, handler as POST };