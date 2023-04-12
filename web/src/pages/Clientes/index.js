import { useEffect } from "react";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Table from "../../components/Table";
import moment from "moment";

import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

import { useDispatch, useSelector } from 'react-redux';
import { allClientes } from '../../store/modules/cliente/actions';

const Clientes = () => {
  const dispatch = useDispatch();
  const { clientes } = useSelector(state => state.clientes)

  useEffect(() =>{
    dispatch(allClientes())
  }, [dispatch]);

  return (
    <div className="col p-5 overflow-auto h-100 ">
      <div className="row">
        <div className="col-12">
          <div className="w-100 d-flex justify-content-between ">
            <h2 className="mb-4 mt-0">Clientes</h2>
            <div>
              <button className="btn btn-primary btn-lg">
                <Icon path={mdiPlus} size={1} />
                <span> Novo CLiente</span>
              </button>
            </div>
          </div>
          <Table 
            data={clientes}
            config={[
              {label: 'Nome', key: 'nome', width: 200, fixed: true },
              {label: 'E-mail', key: 'email' , width: 200},
              {label: 'Telefone', key: 'telefone' , width: 200},
              {label: 'Data Cadastro', content: (cliente) => moment(cliente.dataCadastro).format('DD/MM/YYYY') , width: 200},
              {label: 'Status', content: (cliente) => cliente.status == "A" ? "Ativo" : "Inativo", width: 200},

            ]}
            actions={(cliente) => (
              <Button appearance="primary" size= "xs">Ver informações</Button>
            )}
            onRowClick={(cliente) => {alert(cliente.nome)}}/>
        </div>
      </div>
    </div>
  )
}
aula 05 inicio
export default Clientes;