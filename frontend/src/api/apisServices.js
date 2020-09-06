import axios from 'axios';
const API_URL = 'http://localhost/apimedicos/public/api/medicos';


async function getMedico(){
    const res = await axios.get(API_URL);
    const medicos = res.data.map((medico) => {
        const {nome } = medico;
        return {
            ...medico,
            filterName: nome.toLowerCase(),
            isDeleted: false
        }
    });

    return medicos;
}

async function insertMedico (medico){
    const response = await axios.post('http://localhost/apimedicos/public/api/medicos/add', medico);
    return response.data.id;
}

async function updateMedico (medico){
    const response = await axios.put(`${API_URL}/${medico.id}`, medico);
    console.log(response.data);
    return response.data;
}

async function deleteMedico(medico){
    const response = await axios.delete(`${API_URL}/${medico.id}`);
    return response.data;
}

export {getMedico ,insertMedico, updateMedico, deleteMedico};