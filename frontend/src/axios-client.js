import axios from 'axios';

const axiosClient=axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`
})
//send request
axiosClient.interceptors.request.use((config)=>{
    const token=localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization=`Bearer ${token}`
    return config;
});
//get response
axiosClient.interceptors.response.use((response)=>{
    console.log(response);
    return response;
},(error)=>{
    const {response}=error;
    if(response.status===401){
        localStorage.removeItem('ACCESS_TOKEN')
    }

    throw error;

});
export default axiosClient;