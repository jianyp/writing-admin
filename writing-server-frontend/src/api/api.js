import {get,post} from './index'

export const getTable = params => post(`/getTable`, params);
export const Login = params => post(`/login`, params);
export const register = params => post(`/register`, params);
