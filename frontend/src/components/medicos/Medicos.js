import React from 'react';

export default function Medicos({medicos, onDelete, onEdit}) {

    const editRow = (medico) => {
        console.log("Edição " + medico.nome);
        onEdit(medico);
    };

    const deleteMedico = (id) => {
        console.log("Delete " + id);
        onDelete(id);
    };
    
        return (
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CRM</th>
                        <th>Telefone</th>
                        <th>Especialidades</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {medicos.map((medico) => {
                        return (
                            <tr key={medico.id}>
                            <td>{medico.nome}</td>
                            <td>{medico.crm}</td>
                            <td>{medico.telefone}</td>
                            <td>{medico.especialidades}</td>

                            <td>
                            <span 
                                className="material-icons" style={styles.margin}
                                onClick={() => editRow(medico)} style={{ cursor: 'pointer', color: 'orange' }}
                                >
                                edit
                            </span>

                            <span 
                                className="material-icons"
                                onClick={() => deleteMedico(medico)} style={{ cursor: 'pointer', color: 'red' }}
                                >
                                delete
                            </span>
                        </td> 

                            </tr>
                        ) ;
                    })}

                    
                    
                </tbody>
            </table>

        );
    
}


const styles = {
    margin: {
      marginRight: '7px',
    },
  };