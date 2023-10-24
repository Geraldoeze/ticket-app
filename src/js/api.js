import axios from 'axios'
import { queryBuilder, formatHTTPErrorMsg, formatHTTPResponse } from './utils';

export const getProfile =  async ({queryKey}) => {
  const url = '/datacenter/profile'
  try {
    const res = await axios.get(url);
    return formatHTTPResponse(res);
  } catch (e) {
    throw new Error(formatHTTPErrorMsg(e));
  }
}

export const editProfile =  async (payload, profileId) => {
    const url = queryBuilder('/datacenter/employees/'+profileId).build();
  
    try {
      const res = await axios.put(url, payload);
      return formatHTTPResponse(res);
    } catch (e) {
      throw new Error(formatHTTPErrorMsg(e));
    }
}

export const resetPassword =  async (payload, profileId) => {
  const url = '/datacenter/reset/'+profileId
  try {
    const res = await axios.post(url, payload);
    return formatHTTPResponse(res);
  } catch (e) {
    throw new Error(formatHTTPErrorMsg(e));
  }
}

export const AddBankAccount =  async (payload) => {
  const url = queryBuilder('/datacenter/banks/').build();

  try {
    const res = await axios.post(url, payload);
    return formatHTTPResponse(res);
  } catch (e) {
    throw new Error(formatHTTPErrorMsg(e));
  }
}

export const EditBankAccount =  async (payload, profileId) => {
  const url = queryBuilder('/datacenter/employees/'+profileId).build();

  try {
    const res = await axios.put(url, payload);
    return formatHTTPResponse(res);
  } catch (e) {
    throw new Error(formatHTTPErrorMsg(e));
  }
}

export const getBankAccount =  async (bankId) => {
  const url = '/datacenter/banks?employee_id='+bankId
  try {
    const res = await axios.get(url);
    return formatHTTPResponse(res);
  } catch (e) {
    throw new Error(formatHTTPErrorMsg(e));
  }
}