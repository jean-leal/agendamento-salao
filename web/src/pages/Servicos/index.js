import { useEffect } from "react";
import { Button, DatePicker, Drawer, Modal, Tag } from "rsuite";
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
  resetServico
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
     { <Drawer
        open={components.drawer}
        onClose={() => setComponent('drawer', false)}
        size="sm"
      >
        <Drawer.Body>
          <h3>{behavior === "create" ? "Criar novo" : "Atualizar"} serviço</h3>
          <div className="row mt-3">
            <div className="form-group col-6">
              <b>Título</b>             
                <input
                  type="text"
                  className="form-control"
                  placeholder="Título do serviço"
                  value={servico.titulo}
                  onChange={(e) => setServico('titulo', e.target.value)}
                />  
            </div>
            <div className="form-group col-6">
              <b>Preço</b>
              <input
                type="number"
                className="form-control"
                placeholder="Preço do serviço"
                value={servico.preco}
                onChange={(e) => setServico('preco', e.target.value)}
              />
            </div>
            <div className="form-group col-6">
              <b>Status</b>
              <select
                className="form-control"
                value={servico.status}
                onChange={(e) => setServico('status', e.target.value)}
              >
                <option value="A">Ativo</option>
                <option value="I">Inativo</option>
              </select>
            </div> 
            <div className="form-group col-6">
              <b className="d-block">Duração</b>
              <DatePicker
                block
                format="HH:mm"
                value={new Date(servico.duracao)}
                hideMinutes={(min) => ![0,30].includes(min)}
                onChange={(e) => {
                  setServico('duracao', e);
                }}
              />
             
            </div>
            <div className="col-12">
              <b>Descrição</b>
              <textarea
                rows='5'
                className="form-control"
                placeholder="Descrição do serviço ..."                
                value={servico.descricao}
                onChange={(e) => setServico('descricao', e.target.value)}
              ></textarea>
            </div>  
          </div>
          <Button
            loading={form.saving}
            appearance="primary"
            color={behavior === 'create' ? 'green' : 'blue'}
            size='lg'
            block
            onClick={() => save()}
            className="mt-3"
          >
            {behavior === 'create' ? 'Salvar' : 'Atualizar'} Serviço
          </Button>
          {behavior === 'update' && (
             <Button
             loading={form.saving}
             appearance="primary"
             color="red"
             size='lg'
             block
             onClick={() => setComponent('confirmDelete', true)}
             className="mt-1"
           >
             Remover Serviço
           </Button>
          )}
        </Drawer.Body>
          </Drawer> }
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
                    resetServico()
                    );
                  dispatch(
                    updateServico({
                      behavior: 'create',
                    })
                  );
                  setComponent('drawer', true);
                }}
              >
                <Icon path={mdiPlus} size={1} />
                <span> Novo Serviço</span>
              </button>
            </div>
          </div>
          <Table
            loading={form.filtering}
            data={servicos}
            config={[
              { label: 'Titulo', key: 'titulo', width: 200, fixed: true },
              { label: 'R$ Preço', content: (servico) => `R$ ${servico.preco.toFixed(2)}`, width: 200 },
              { label: 'Duração', key: 'duracao',content: (servico) => moment(servico.duracao).format('HH:mm') },
              { label: 'Status', key: 'status', content: (servico) => (
                <Tag color={servico.status === 'A' ? 'green' : 'red'}>
                    { servico.status === "A" ? "Ativo" : "Inativo" }
                </Tag>
              )}              
            ]}
            actions={(servico) => (
              <Button appearance="primary" color="blue" size="xs">Ver informações</Button>
            )}
            onRowClick={(servico) => {
              dispatch(
                updateServico({
                  behavior: 'update',
                })
              );
              dispatch(
                updateServico({
                  servico,
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



