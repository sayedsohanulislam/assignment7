/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const addInteraction = (friendName, type) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toISOString(),
      title: `${type} with ${friendName}`,
      type: type.toLowerCase() 
    };
    setTimeline((prev) => [newEntry, ...prev]);
    showToast(`Interaction logged: ${type} with ${friendName}`);
  };

  return (
    <AppContext.Provider value={{ timeline, addInteraction, toast }}>
      {children}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity">
          {toast}
        </div>
      )}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
