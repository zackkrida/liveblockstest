import "../styles/globals.css";
import { createClient } from "@liveblocks/client";
import { LiveblocksProvider } from "@liveblocks/react";

// Create a liveblocks client
const client = createClient({
  authEndpoint: "/api/auth",
});

function MyApp({ Component, pageProps }) {
  return (
    /**
     * Add a LiveblocksProvider at the root of your app
     * to be able to use liveblocks react hooks in your components
     **/
    <LiveblocksProvider client={client}>
      <Component {...pageProps} />
    </LiveblocksProvider>
  );
}

export default MyApp;