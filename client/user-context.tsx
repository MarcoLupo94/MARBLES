import {createContext} from 'react';
import { User } from '../lib/api-intefaces';

export const userContext =createContext([{ id: "", email: "", habits: [] }, ()=>{}])


