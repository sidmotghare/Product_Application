import { AuthContextProvider } from "./AuthContext";
import { ProductContextProvider } from "./ProductContext";

export function MainContextProvider({ children }) {
  return (
    <AuthContextProvider>
      <ProductContextProvider>{children}</ProductContextProvider>
    </AuthContextProvider>
  );
}
