import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer';

const configureAppStore = () => configureStore({ reducer });

export default configureAppStore;