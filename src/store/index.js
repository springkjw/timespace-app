import {useContext, createContext} from 'react';

import appStore from './app';

export const storeContext = createContext({
  appStore: new appStore(),
});

export const useStores = () => useContext(storeContext);
