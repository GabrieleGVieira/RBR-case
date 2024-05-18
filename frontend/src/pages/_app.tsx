// pages/_app.js
import { FilterProvider } from "@/context/FilterContext";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../redux/store";

// Define seu tema personalizado, se necessário
const theme = extendTheme({
  // Defina suas configurações de tema aqui
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
