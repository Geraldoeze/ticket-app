import axios from "axios";
import request from "../utils/http-request";

export const getTickets = async () => {
  let uri = "";
  try {
    const uri = `/`;
    return await request.get(uri, {});
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};

export const getTicket = async (id) => {
  let uri = "";
  try {
    const uri = `/fetch/${id}`;
    return await request.get(uri, {});
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};

export const addNewTicket = async (data) => {
  let uri = "";
  try {
    const uri = `/add`;
    return await request.post(uri, data);
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};

export const deleteTicket = async (id) => {
  let uri = "";
  try {
    const uri = `/delete/${id}`;
    return await request.delete(uri, {});
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};

// login
export const loginUser = async (data) => {
  let uri = "";
  try {
    const uri = `/auth`;
    return await request.post(uri, data);
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};

export const getMessage = async (userId) => {
  let uri = "";
  try {
    const uri = `/message/${userId}`;
    return await request.get(uri, {});
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};

export const postMessage = async (data) => {
  let uri = "";
  try {
    const uri = `/create`;
    return await request.post(uri, data);
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};

export const statusUpdate = async (data, userId) => {
  let uri = "";
  console.log(userId);
  try {
    const uri = `/status/${userId}`;
    return await request.put(uri, data);
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};

export const statusPending = (userId) => {
  // Schedule the function to run after 10 minutes
  setTimeout(() => {
    // Your code to run after 10 minutes
    statusUpdate("pending", userId);
    console.log("Function called after 10 minutes.");
  }, 10 * 60 * 1000); // 10 minutes in milliseconds
};
