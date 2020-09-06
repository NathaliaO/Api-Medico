import React, { useState, useEffect } from 'react';
import css from './app.module.css';

import * as api from './api/apisServices';
import Medicos from './components/medicos/Medicos';
import ModalMedico from './components/ModalMedico';
import NovoMedico from './components/medicos/NovoMedico';

function getTotalMedico(medicos){
  return medicos.reduce((accumulator, current) => {
    return accumulator + 1;
  }, 0);
}

export default function App(){
  const [allMedicos, setAllMedicos] = useState([]);
  const [filter, setFilter ] = useState('');

  const [ filteredMedico, setFilteredMedico ] = useState([]);
  const [ filteredMedicoTot, setFilteredMedicoTot ] = useState(0);
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ modalOpenCadastro, setModalOpenCadastro ] = useState(false);

  const [selectedMedico, setSelectedMedico] = useState({});
  
  useEffect(()=>{
    const getMedico = async() => {
      const allMedicos = await api.getMedico();
      setAllMedicos(allMedicos);
      setFilteredMedico(Object.assign([], allMedicos));
    }
    getMedico();
  }, []);

  useEffect(() => {
    const filterLowerCase = filter.toLowerCase();
    
    const filteredMedico = allMedicos.filter((medico) => {
      return medico.filterName.includes(filterLowerCase) || medico.crm.includes(filterLowerCase);
    });

    setFilteredMedico(filteredMedico);
    setFilteredMedicoTot(getTotalMedico(filteredMedico));
  }, [allMedicos, filter]);

  const handleChengeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = async(medicoDelete) => {
    const isDelete = await api.deleteMedico(medicoDelete);

    if(isDelete){
      const deleteMedicoIndex = allMedicos.findIndex((medico) => medico.id === medicoDelete.id);

      const newMedico = Object.assign([], allMedicos);
      newMedico[deleteMedicoIndex].isDelete = true;
      newMedico[deleteMedicoIndex].value = 0;
      setAllMedicos(newMedico);
      window.location.reload();
      alert('Médico Deletado com Sucesso!!');
    }
    
  }

  const handleEditing = async (medicoEdit) => {
    setModalOpen(true);
    setSelectedMedico(medicoEdit);
  }

  const handleSave = async (formData) => {
    const { newMedico }= formData;

    await api.updateMedico(newMedico);
    setModalOpen(false);
    window.location.reload();
    alert('Médico Editado com Sucesso!!');
    
  }
  
  const handleClose = async () => {
    setModalOpen(false);
  }

  const addMedico = async () => {
    setModalOpenCadastro(true);
  }

  const saveNovo = async ( formData ) => {
    const {newMedico } = formData;

    await api.insertMedico(newMedico);
    setModalOpen(false);
    window.location.reload();
    alert('Médico Cadastrado com Sucesso!!');
  }


    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>API Médico</h1>
        <div className={css.flexRow}>
          <div className="input-field">
            <input
                placeholder="Filtro"
                type="text"
                value={filter}
                onChange={handleChengeFilter}
              />
          </div>

          <div className={css.leftRightSpace}>
            | Medico Total: <strong>{filteredMedicoTot}</strong> |
          </div>

          <div className={css.leftRightSpace}>
            <span 
                className="material-icons"
                onClick={() => addMedico()} style={{ cursor: 'pointer', color: 'green' }}
                >
                add
                {modalOpenCadastro && <NovoMedico saveNovo={saveNovo} onClose={handleClose} selectedMedico={selectedMedico} />}
            </span>
            
          </div>

        </div>
        
        <hr />
        <div>
          <Medicos medicos={filteredMedico} onDelete={handleDelete} onEdit={handleEditing}/>
        </div>

        {modalOpen && <ModalMedico onSave={handleSave} onClose={handleClose} selectedMedico={selectedMedico}/>}
      </div>
      
     
    );
  }

const styles = {
  centeredTitle: {
    textAlign: 'center',
  },
};