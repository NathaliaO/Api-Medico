import React, { useState,  useEffect } from 'react';
import { View, Picker, StyleSheet } from "react-native";
import Modal from 'react-modal'

Modal.setAppElement('#root');

export default function ModalMedico({saveNovo, onClose, selectedMedico}) {

    const {id} = selectedMedico;
    const [medico, setMedico] = useState(selectedMedico);
    const [selectedValue, setSelectedValue] = useState("Alergia");

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = (event) =>{
        if (event.key === 'Escape'){
            onClose(null);
        }
    };

    const handleModalClose = () => {
        onClose(null);
      };

    const handleChange = (event) => {
        const{name, value} = event.target
        console.log({[name]: value});

        setMedico({...medico, [name]: value});
    }

    const handleForm = (event) =>{
        event.preventDefault();
        console.log("EVENTO");
        const formData = {
            id,
            newMedico: medico
        }
        saveNovo(formData);
    }

    return (
        <div>
            <Modal isOpen={true} >
            <div style={styles.flexRow}>
                <span style={styles.title}>Cadastrar Novo Médico</span>
                <button
                    className="waves-effect waves-lights btn red dark-4"
                    onClick={handleModalClose}
                >
                    X
                </button>
            </div>
                <form onSubmit={handleForm}>
                <div className="input-field">
                    <input id="inputName" name="nome" type="text" onChange={handleChange}/>
                    <label className="active" htmlFor="inputName" >
                        Nome do Médico: 
                    </label>
                </div>

                <div className="input-field">
                    <input id="inputCRM" name="crm" type="text" onChange={handleChange}/>
                    <label className="active" htmlFor="inputCRM" >
                        CRM do Médico: 
                    </label>
                </div>

                <div className="input-field">
                    <input id="inputTelefone" name="telefone" type="text" onChange={handleChange}/>
                    <label className="active" htmlFor="inputTelefone" >
                        Telefone do Médico: 
                    </label>
                </div>

                <div className="input-field">
                    <input id="inputEspecialidade" name="especialidades" type="text"  onChange={handleChange}/>

                    <label className="active" htmlFor="inputEspecialidades" >
                        Especialidade do Médico: 
                    </label>
                </div>

                    <div style={styles.flexRow}>
                        <button
                            className="waves-effect waves-light btn green">
                            Salvar
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

const styles = {
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '40px',
    },
  
    title: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
    },
  
    errorMessage: {
      color: 'red',
      fontWeight: 'bold',
    },
  };
  
const stylesOption = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });