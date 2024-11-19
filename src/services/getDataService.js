import axios from "axios"

export const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        if (error.response) {
            const errorMsg = error.response.data.message || 'Error en la solicitud';
            throw new Error(errorMsg);
        }
        else if (error.request) {
            throw new Error('No se recibio respuesta del servidor');
        }
        else {
            throw new Error('Error al hacer la solicitud');
        }
    }
}