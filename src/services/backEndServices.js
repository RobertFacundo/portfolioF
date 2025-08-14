import axiosInstance from "../config/axiosConfig";

const apiServices = {
    incrementServiceView: async () => {
        try {
            const response = await axiosInstance.post('/api/views/increment');
            return { success: true, count: response.data.count };
        } catch (error) {
            console.error('Error in incrementPortfolioview:', error.response?.data || error.message);
            return { success: false, message: error.response?.data?.message || error.message || 'Failed to increment view count' };
        }
    },

    getPortfolioViews: async () => {
        try {
            const response = await axiosInstance.get('/api/views');
            return { success: true, count: response.data.count };
        } catch (error) {
            console.error('Error in getPortfolioViews:', error.response?.data || error.message);
            return { success: false, message: error.response?.data?.message || 'Failed to fetch view counts' };
        }
    },

    incrementProjectClick: async (projectName) => {
        try {
            const response = await axiosInstance.post(`/api/projects/click/${projectName}`);
            return { success: true, projectName: response.data.projectName, clickCount: response.data.clickCount };
        } catch (error) {
            console.error(`Error in incrementProjectclick for ${projectName}:`, error.response?.data || error.message);
            return { success: true, message: error.response?.data?.message || error.message || `Failed to incrementclick count for ${projectName}` };
        }
    },

    getAllProjectClicks: async () => {
        try {
            const response = await axiosInstance.get('/api/projects/clicks');
            return { success: true, projectClicks: response.data.projectClicks };
        } catch (error) {
            return { success: false, message: error.response?.data?.message || error.message || 'Failed to fetch project clicks counts' }
        }
    },
};

export default apiServices;