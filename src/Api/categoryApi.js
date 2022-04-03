import axiosClient from './axiosClient';

const categoryApi = {
    getAll(params) {
        const url = '/categorys';
        return axiosClient.get(url, {params : params});
    }
    get(id) {
        const url = `/categorys/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/categorys';
        return axiosClient.post(url, data);
    }
    update(data) {
         const url = `/categorys/${data.id}`;
        return axiosClient.patch(url, data);
    }
    remove(id) {
        const url = `/categorys/${data.id}`;
        return axiosClient.delete(url);
    }
    
}

export default categoryApi;