import { useEffect } from "react";
import { Button, Drawer, Modal, TagPicker, TreePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Table from "../../components/Table";
import moment from "moment";

import Icon from '@mdi/react';
import { mdiPlus, mdiAlertOutline } from '@mdi/js';

import { useDispatch, useSelector } from 'react-redux';
import {
  allColaboradores,
  updateColaborador,
  filterColaboradores,
  addColaborador,
  unlinkColaborador,
  allServicos,
} from '../../store/modules/colaborador/actions';
import ModalFooter from "rsuite/esm/Modal/ModalFooter";

const Colaboradores = () => {
  const dispatch = useDispatch();
  const { colaboradores, colaborador, behavior, form, components, servicos } = useSelector(state => state.colaborador);
  
  const setComponent = (component, state) => {
    dispatch(
      updateColaborador({
        components: { ...components, [component]: state },
      })
    );
  }

  const setColaborador = (key, value) => {
    dispatch(
      updateColaborador({
        colaborador: { ...colaborador, [key]: value },
      })
    );
  }

  const save = () => {  
    dispatch(addColaborador());
  }

  const remove = () => {
    dispatch(unlinkColaborador());
  }

  useEffect(() => {
    dispatch(allColaboradores())
    dispatch(allServicos())
  }, [dispatch]);

  return (
    <div className="col p-5 overflow-auto h-100 ">
      <Drawer
        open={components.drawer}
        onClose={() => setComponent('drawer', false)}
        size="sm"
      >
        <Drawer.Body>
          <h3>{behavior === "create" ? "Criar novo" : "Atualizar"} colaborador</h3>
          <div className="row mt-3">
            <div className="form-group col-12 mb-3">
              <b>E-mail</b>
              <div className="input-group">
                <input
                  disabled ={behavior === "update"}
                  type="email"
                  className="form-control"
                  placeholder="E-mail do colaborador"
                  value={colaborador.email}
                  onChange={(e) => setColaborador('email', e.target.value)}
                />
                {behavior === 'create' && (
                  <div className="input-group-append">
                    <Button
                      appearance="primary"
                      color="blue"
                      loading={form.filtering}
                      disabled={form.filtering}
                      onClick={() => {
                        dispatch(
                          filterColaboradores()
                        );
                      }}
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
                placeholder="Nome do colaborador"
                disabled={form.disabled}
                value={colaborador.nome}
                onChange={(e) => setColaborador('nome', e.target.value)}
              />
            </div>
            <div className="form-group col-6">
              <b>Status</b>
              <select
                className="form-control"
                disabled={form.disabled && behavior === 'create'}
                value={colaborador.vinculo}
                onChange={(e) => setColaborador('vinculo', e.target.value)}
              >
                <option value="A">Ativo</option>
                <option value="I">Inativo</option>
              </select>
            </div> 
            <div className="form-group col-6">
              <b>Telefone / Whatsapp</b>
              <input
                type="text"
                className="form-control"
                placeholder="Telefone / Whatsapp do colaborador"
                disabled={form.disabled}
                value={colaborador.telefone}
                onChange={(e) => setColaborador('telefone', e.target.value)}
              />
            </div>
            <div className="col-12">
              <b>Especialidades</b>
              <TagPicker
                size="lg"
                block
                data={ servicos }
                disabled={form.disabled && behavior === 'create'}
                value={colaborador.especialidades}
                onChange={(especialidade) => setColaborador('especialidades', especialidade)}
              />
            </div>
            <Button
              block
              className="mt-3"
              appearance="primary"
              color={behavior === "create" ? 'green' : 'blue'}
              size="lg"
              loading={form.saving}
              onClick={()=> save()}
            >
             {behavior === "create" ? "Salvar" : "Atualizar"} Colaborador
          </Button>
          {behavior === "update" && (
            <Button
              block
              className="mt-1"
              appearance="primary"
              color="red"
              size="lg"
              loading={form.saving}
              onClick={()=> setComponent('confirmDelete', true)}
            >
              Remover Colaborador
            </Button>
          )}
          
          </div>
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
            <h2 className="mb-4 mt-0">Colaboradores</h2>
            <div>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  dispatch(
                    updateColaborador({
                      behavior: 'create',
                    })
                  );
                  setComponent('drawer', true);
                }}
              >
                <Icon path={mdiPlus} size={1} />
                <span> Novo Colaborador</span>
              </button>
            </div>
          </div>
          <Table
            loading={form.filtering}
            data={colaboradores}
            config={[
              { label: 'Nome', key: 'nome', width: 200, fixed: true },
              { label: 'E-mail', key: 'email', width: 200 },
              { label: 'Telefone', key: 'telefone', width: 200 },
              { label: 'Data Cadastro', content: (colaborador) => moment(colaborador.dataCadastro).format('DD/MM/YYYY'), width: 200 },
              { label: 'Status', content: (colaborador) => colaborador.status === "A" ? "Ativo" : "Inativo", width: 200 },

            ]}
            actions={(colaborador) => (
              <Button appearance="primary" color="blue" size="xs">Ver informações</Button>
            )}
            onRowClick={(colaborador) => {
              dispatch(
                updateColaborador({
                  behavior: 'update',
                })
              );
              dispatch(
                updateColaborador({
                  colaborador,
                })
              );
              setComponent('drawer', true);
              }} />
        </div>
      </div>
    </div>
  )
}

export default Colaboradores;



