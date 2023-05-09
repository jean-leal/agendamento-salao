import { useEffect } from "react";
import { Button, Drawer, Modal, TagPicker, TreePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Table from "../../components/Table";
import moment from "moment";

import Icon from '@mdi/react';
import { mdiPlus, mdiAlertOutline } from '@mdi/js';

import { useDispatch, useSelector } from 'react-redux';
import {
  allServicos,
  updateServico,
  addServico,
  removeServico,
} from '../../store/modules/servico/actions';
import ModalFooter from "rsuite/esm/Modal/ModalFooter";

const Servicos = () => {
  const dispatch = useDispatch();
  const { servicos, servico, behavior, form, components } = useSelector(state => state.servico);
  const setComponent = (component, state) => {
    dispatch(
      updateServico({
        components: { ...components, [component]: state },
      })
    );
  }

  const setServico = (key, value) => {
    dispatch(
      updateServico({
        servico: { ...servico, [key]: value },
      })
    );
  }

  const save = () => {  
    dispatch(addServico());
  }

  const remove = () => {
    dispatch(removeServico());
  }

  useEffect(() => {
    dispatch(allServicos())
  }, [dispatch]);

  return (
    <div className="col p-5 overflow-auto h-100 ">
     {/* <Drawer
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
                  onChange={(e) => setServico('email', e.target.value)}
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
                          filterservicos()
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
                onChange={(e) => setServico('nome', e.target.value)}
              />
            </div>
            <div className="form-group col-6">
              <b>Status</b>
              <select
                className="form-control"
                disabled={form.disabled && behavior === 'create'}
                value={colaborador.vinculo}
                onChange={(e) => setServico('vinculo', e.target.value)}
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
                onChange={(e) => setServico('telefone', e.target.value)}
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
                onChange={(especialidade) => setServico('especialidades', especialidade)}
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
          </Drawer> */}
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
            <h2 className="mb-4 mt-0">Serviços</h2>
            <div>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  dispatch(
                    updateServico({
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
            data={servicos}
            config={[
              { label: 'Titulo', key: 'titulo', width: 200, fixed: true },
              aula 5 2:20
              { label: 'R$ Preço', content: (servico) => `R$ ${servico.preco.toFixed(2)}`, width: 200 },
              { label: 'Recorrência', content: (servico) => `R$ ${servico.recorrencia.toFixed(2)}`, width: 200 },
              { label: 'Data Cadastro', content: (colaborador) => moment(colaborador.dataCadastro).format('DD/MM/YYYY'), width: 200 },
              { label: 'Status', content: (colaborador) => colaborador.status === "A" ? "Ativo" : "Inativo", width: 200 },

            ]}
            actions={(colaborador) => (
              <Button appearance="primary" color="blue" size="xs">Ver informações</Button>
            )}
            onRowClick={(colaborador) => {
              dispatch(
                updateServico({
                  behavior: 'update',
                })
              );
              dispatch(
                updateServico({
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

export default Servicos;



