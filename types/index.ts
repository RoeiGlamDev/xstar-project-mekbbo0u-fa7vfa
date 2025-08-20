import { createContext, useContext } from 'react';

// Define types for the context
interface GlamCSContextType {
  // Add properties as needed
  themeColor: string;
  luxuryEffect: boolean;
}

// Create context with default values
const GlamCSContext = createContext<GlamCSContextType | undefined>(undefined);

// Custom hook to use GlamCS context
export const useGlamCS = () => {
  const context = useContext(GlamCSContext);
  if (!context) {
    throw new Error('useGlamCS must be used within a GlamCSProvider');
  }
  return context;
};

// Export context and provider
export const GlamCSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value: GlamCSContextType = {
    themeColor: 'orange', // Default theme color
    luxuryEffect: true, // Default luxury effect
  };

  return (
    <GlamCSContext.Provider value={value}>
      {children}
    </GlamCSContext.Provider>
  );
};

export default GlamCSContext;