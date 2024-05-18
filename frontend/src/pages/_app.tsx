import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "@/redux/store";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.FC<any>;
  pageProps: any;
}) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
