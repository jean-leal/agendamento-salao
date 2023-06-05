import { useEffect } from "react";
import { Button, Drawer, Modal } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Table from "../../components/Table";
import moment from "moment";

import Icon from '@mdi/react';
import { mdiPlus, mdiAlertOutline } from '@mdi/js';

import { useDispatch, useSelector } from 'react-redux';
import {
  allClientes,
  updateCliente,
  filterClientes,
  addCliente,
  unlinkCliente,
} from '../../store/modules/cliente/actions';
import ModalFooter from "rsuite/esm/Modal/ModalFooter";

const Clientes = () => {
  const dispatch = useDispatch();
  const { clientes, cliente, behavior, form, components } = useSelector(state => state.cliente);

  const setComponent = (component, state) => {
    dispatch(
      updateCliente({
        components: { ...components, [component]: state },
      })
    );
  }

  const setCliente = (key, value) => {
    dispatch(
      updateCliente({
        cliente: { ...cliente, [key]: value },
      })
    );
  }

  const save = () => {
    dispatch(addCliente());
  }

  const remove = () => {
    dispatch(unlinkCliente());
  }

  useEffect(() => {
    dispatch(allClientes())
  }, [dispatch]);

  return (
    <div className="col p-5 overflow-auto h-100 ">
      <Drawer
        open={components.drawer}
        onClose={() => setComponent('drawer', false)}
        size="sm"
      >
        <Drawer.Body>
          <h3>{behavior === "create" ? "Criar novo" : "Atualizar"} cliente</h3>
          <div className="row mt-3">
            <div className="form-group col-12 mb-3">
              <b>E-mail</b>
              <div className="input-group">
                <input
                  disabled={behavior === "update"}
                  type="email"
                  className="form-control"
                  placeholder="E-mail do cliente"
                  value={cliente.email}
                  onChange={(e) => setCliente('email', e.target.value)}
                />
                {behavior === "create" && ( 
                  <div className="input-group-append">
                    <Button
                      appearance="primary"
                      color="blue"
                      loading={form.filtering}
                      disabled={form.filtering}
                      onClick={() => dispatch(filterClientes())}
                    >
                      Pesquisar
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className="form-group col-6">
              <b>Nome</b>
              <input
                type="text"
                className="form-control"
                placeholder="Nome do Cliente"
                disabled={form.disabled}
                value={cliente.nome}
                onChange={(e) => setCliente('nome', e.target.value)}
              />
            </div>
            <div className="form-group col-6">
              <b>Telefone / Whatsapp</b>
              <input
                type="text"
                className="form-control"
                placeholder="Telefone / Whatsapp do Cliente"
                disabled={form.disabled}
                value={cliente.telefone}
                onChange={(e) => setCliente('telefone', e.target.value)}
              />
            </div>           
            <div className="form-group col-3">
              <b>CEP</b>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o CEP"
                disabled={form.disabled}
                value={cliente.endereco.cep}
                onChange={(e) =>
                  setCliente('endereco', {
                    ...cliente.endereco,
                    cep: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group col-6">
              <b>Rua / Logradouro</b>
              <input
                type="text"
                className="form-control"
                placeholder="Rua / Logradouro"
                disabled={form.disabled}
                value={cliente.endereco.logradouro}
                onChange={(e) =>
                  setCliente('endereco', {
                    ...cliente.endereco,
                    logradouro: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group col-3">
              <b>Número</b>
              <input
                type="text"
                className="form-control"
                placeholder="Número"
                disabled={form.disabled}
                value={cliente.endereco.numero}
                onChange={(e) =>
                  setCliente('endereco', {
                    ...cliente.endereco,
                    numero: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group col-3">
              <b>UF</b>
              <input
                type="text"
                className="form-control"
                placeholder="UF"
                disabled={form.disabled}
                value={cliente.endereco.uf}
                onChange={(e) =>
                  setCliente('endereco', {
                    ...cliente.endereco,
                    uf: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group col-9">
              <b>Cidade</b>
              <input
                type="text"
                className="form-control"
                placeholder="Cidade"
                disabled={form.disabled}
                value={cliente.endereco.cidade}
                onChange={(e) =>
                  setCliente('endereco', {
                    ...cliente.endereco,
                    cidade: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <Button
            block
            className="mt-3"
            appearance="primary"
            color={behavior === "create" ? 'green' : 'red'}
            size="lg"
            loading={form.saving}
            onClick={()=>{
             if (behavior === "create") {
              save();
             } else {
              setComponent('confirmDelete', true);
             }
            }}
          >
            {behavior === "create" ? "Salvar" : "Remover"} Cliente
          </Button>
        </Drawer.Body>
      </Drawer>
      <Modal
        open={components.confirmDelete}
        onClose={() => setComponent('confirmDelete', false)}
        size="xs"
      >
        <Modal.Body>
          <Icon
            path={mdiAlertOutline}
            size= {2}
            style={{ color: '#ffb300' }}
          />
          {'     '} Tem certeza que deseja excluir? Essa ação será irreversível!
        </Modal.Body>
        <ModalFooter>
          <Button
            loading={form.saving}
            onClick={()=> remove()}
            appearance="primary"
            color="red"
          >
            Sim tenho certeza!
          </Button>
          <Button 
            onClick={() => setComponent('confirmDelete', false)}            
            appearance="subtle"
          >
            Cancelar
          </Button>
        </ModalFooter>

      </Modal>
      <div className="row">
        <div className="col-12">
          <div className="w-100 d-flex justify-content-between ">
            <h2 className="mb-4 mt-0">Clientes</h2>
            <div>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  dispatch(
                    updateCliente({
                      behavior: 'create',
                    })
                  );
                  setComponent('drawer', true);
                }}
              >
                <Icon path={mdiPlus} size={1} />
                <span> Novo Cliente</span>
              </button>
            </div>
          </div>
          <Table
            loading={form.filtering}
            data={clientes}
            config={[
              { label: 'Nome', key: 'nome', width: 200, fixed: true },
              { label: 'E-mail', key: 'email', width: 200 },
              { label: 'Telefone', key: 'telefone', width: 200 },
              { label: 'Data Cadastro', content: (cliente) => moment(cliente.dataCadastro).format('DD/MM/YYYY'), width: 200 },
              { label: 'Status', content: (cliente) => cliente.status === "A" ? "Ativo" : "Inativo", width: 200 },

            ]}
            actions={(cliente) => (
              <Button appearance="primary" color="blue" size="xs">Ver informações</Button>
            )}
            onRowClick={(cliente) => {
              dispatch(
                updateCliente({
                  behavior: 'update',
                })
              );
              dispatch(
                updateCliente({
                  cliente,
                })
              );
              setComponent('drawer', true);
              }} />
        </div>
      </div>
    </div>
  )
}

export default Clientes;