import {useContext, createContext} from 'react';

import appStore from './app';
import userStore from './user';

export const storeContext = createContext({
  appStore: new appStore(),
  userStore: new userStore(),
});

export const useStores = () => useContext(storeContext);
