import { ClerkProvider as ClerkProviderRow } from "@clerk/nextjs";

function ClerkProvider({ children }: { children: React.ReactNode }) {
  return <ClerkProviderRow>{children}</ClerkProviderRow>;
}

export default ClerkProvider;


