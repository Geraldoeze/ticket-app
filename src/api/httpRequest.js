import axios from "axios";
import request from "../utils/http-request";


export const getTickets = async (userId, page, pageLimit) => {
  let uri = "";
  try {
    const uri = `/${userId}?page=${page}&pageSize=${pageLimit}`;
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

export const getMessage = async (ticketId) => {
  let uri = "";
  try {
    const uri = `/message/${ticketId}`;
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


// admin
export const loginAdmin = async (data) => {
  let uri = "";
  try {
    const uri = `/admin/auth`;

    return await request.post(uri, data);
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};

// admin route

export const getUsers = async (adminId, page, pageLimit) => {
  let uri = "";
  try {
    const uri = `/admin/${adminId}?page=${page}&pageSize=${pageLimit}`;
    return await request.get(uri, {});
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};

export const addNewUser = async (data) => {
  let uri = "";
  try {
    const uri = `/admin/newuser`;
    return await request.post(uri, data);
  } catch (e) {
    return { status: "error", msg: e?.response?.data?.message || e?.message };
  }
};