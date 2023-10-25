import request from "../utils/http-request";


export const getTickets = async () => {
    let uri = "";
    try {
        const uri = `/`;
        return await request.get(uri, {});
    } catch (e) {
        return { status: 'error', msg: e?.response?.data?.message || e?.message }
    }
};

export const addNewTicket = async (data) => {
    let uri = "";
    try {
        const uri = `/add`;
        return await request.post(uri, data);
    } catch (e) {
        return { status: 'error', msg: e?.response?.data?.message || e?.message }
    }
}

