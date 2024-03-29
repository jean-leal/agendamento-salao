import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { DatePicker, Drawer, TagPicker, Button, Modal } from 'rsuite';
import moment from 'moment';
import 'moment/locale/pt-br';

import { 
  allHorarios, 
  allServicos, 
  filterColaboradores,
  addHorario,
  updateHorario,
  removeHorario
} from '../../store/modules/horario/actions';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '@mdi/react';
import ModalFooter from "rsuite/esm/Modal/ModalFooter";
import { mdiPlus, mdiAlertOutline } from '@mdi/js';
import { useEffect } from 'react';

moment.locale('pt-br')

const localizer = momentLocalizer(moment);

const Horarios = () => {
  const dispatch = useDispatch();
  const {horarios, servicos, form, colaboradores, behavior, horario, components} = useSelector(state => state.horario);

  const diasSemanaData = [
    new Date(2023, 5, 11, 0, 0, 0, 0),
    new Date(2023, 5, 12, 0, 0, 0, 0),
    new Date(2023, 5, 13, 0, 0, 0, 0),
    new Date(2023, 5, 14, 0, 0, 0, 0),
    new Date(2023, 5, 15, 0, 0, 0, 0),
    new Date(2023, 5, 16, 0, 0, 0, 0),
    new Date(2023, 5, 17, 0, 0, 0, 0)
  ];

  const diasDaSemana = [
    'domingo',
    'segunda-feira',
    'terça-feira', 
    'quarta-feira', 
    'quinta-feira',
    'sexta-feira',
    'sábado'
  ]
 
  const formatEvents = horarios.map((horario, index) => horario.dias.map((dia) =>({
    resource: horario,
    title: `${horario.especialidadesId.length} espec. e ${horario.colaboradorId.length} colab.`,
    start: new Date(
      diasSemanaData[dia].setHours(
        parseInt(moment(horario.inicio).format('HH')),
        parseInt(moment(horario.inicio).format('mm')),
      )
    ),
    end: new Date(
      diasSemanaData[dia].setHours(
        parseInt(moment(horario.fim).format('HH')),
        parseInt(moment(horario.fim).format('mm')),
      )
    )
  }))).flat()

  const setComponent = (component, state) => {
    dispatch(
      updateHorario({
        components: { ...components, [component]: state },
      })
    );
  }

  const setHorario = (key, value) => {
    dispatch(
      updateHorario({
        horario: { ...horario, [key]: value },
      })
    );
  }

  const save = () => {
    dispatch(addHorario())
  } 

  const remove = () => {
    dispatch(removeHorario())
  }

  useEffect(()=> {
    // todos os horarios
    dispatch(allHorarios());
    // todos os serviços
    dispatch(allServicos());
        
  }, [dispatch])

  useEffect(()=> {
    dispatch(filterColaboradores())   
  }, [horario.especialidadesId])
  
  return (
    <div className="col p-5 overflow-auto h-100 ">
       <Drawer
        open={components.drawer}
        onClose={() => setComponent('drawer', false)}
        size="sm"
      >
        <Drawer.Body>
          <h3>{behavior === "create" ? "Criar novo" : "Atualizar"} horário de atendimento</h3>
          <div className="row mt-3">
            <div className="col-12">
              <b>Dias da semana</b>
              <TagPicker
                size='lg'
                block
                value={horario.dias}
                data={diasDaSemana.map((label, value) => ({label, value}))}
                onChange={(value) => {
                  setHorario('dias', value);
                }}
              />
              </div>
              <div className="col-6 mt-3">
                <b className='d-block'>Horário Inicial</b>
                <DatePicker
                  block
                  format="HH:mm"
                  value={new Date(horario.inicio)}
                  hideMinutes={(min) => ![0,30].includes(min)}
                  onChange={(e) => {
                    setHorario('inicio', e);
                  }}
                />
              </div>
              <div className="col-6 mt-3">
                <b className='d-block'>Horário Final</b>
                <DatePicker
                  block
                  format="HH:mm"
                  value={new Date(horario.fim)}
                  hideMinutes={(min) => ![0,30].includes(min)}
                  onChange={(e) => {
                    setHorario('fim', e);
                  }}
                />
              </div>
              <div className="col-12">
                <b>Especialidades disponíveis</b>
                <TagPicker
                  block
                  data={servicos}                  
                  value={horario.especialidadesId}
                  onChange={(e) => {
                    setHorario('especialidadesId', e);
                  }}
                />
              </div>
              <div className="col-12">
                <b>Colaboradores disponíveis</b>
                <TagPicker
                  block
                  data={colaboradores}                  
                  value={horario.colaboradorId}
                  onChange={(e) => {
                    setHorario('colaboradorId', e);
                  }}
                />
              </div>
              <Button
                loading={form.saving}
                appearance='primary'
                color={behavior === 'create' ? 'green' : 'blue'}
                size='lg'
                block
                onClick={()=> save()}
                className='mt-3'
              >
                Salvar Horário de Atendimento
              </Button>
              {behavior === 'update' && (
                <Button
                loading={form.saving}
                color='red'
                appearance='primary'
                size='lg'
                block
                onClick={()=> setComponent('confirmDelete', true)}
                className='mt-1'
              >
                Remover Horário de Atendimento
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
          <h2 className="mb-4 mt-0">Horários de atendimento</h2>
            <div>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  dispatch(
                    updateHorario({
                      behavior: 'create'
                    })
                  );
                  setComponent('drawer', true);
                }}
              >
                <Icon path={mdiPlus} size={1} />
                <span> Novo Horário</span>
              </button>
            </div>          
          </div>         
          <Calendar
            onSelectEvent={e => {
              dispatch(
                updateHorario({
                  behavior: 'update',
                })
              );
              dispatch(
                updateHorario({
                 horario: e.resource
                })
              )
              setComponent('drawer', true)
             
            }}
            localizer={localizer}
            toolbar={false}
            formats={{
              dateFormat: 'dd',
              //dayFormat: (date, culture, localizer) => localizer.format(date, 'dddd', culture)
            }}
            onSelectSlot={(slotInfo) => {
              const {start, end} = slotInfo
              dispatch(updateHorario({
                behavior: 'create',
                horario: {
                  ...horario, 
                  dias: [moment(start).day()],
                  inicio: new Date(start) ,
                  fim: new Date(end)
                }
              }))
              setComponent('drawer', true);
            }}
            popup
            selectable
            events={formatEvents}
            defaultDate={diasSemanaData[moment().day()]}
            defaultView='week'
            style={{ height: 600 }}
          />
        </div>
      </div>
    </div>
  )
}

export default Horarios;