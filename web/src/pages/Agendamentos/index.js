import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const localizer = momentLocalizer(moment);

const Agendamentos = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch({
      type: '@agendamento/FILTER', 
      start: moment().weekday(0).format('YYYY-MM-DD'),
      end: moment().weekday(6).format('YYYY-MM-DD'),
    })
   
  }, [dispatch]);
 console.log(dispatch)
  return (
    <div className="col p-5 overflow-auto h-100 ">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 mt-0">Agendamentos</h2>
          <Calendar
            localizer={localizer}
            events={[
              {title: "test", start: moment().toDate(), end:moment().add(90, 'minutes').toDate()}
            ]}
            defaultView='week'
            selectable
            popup
            style={{ height: 600 }}
          />
        </div>
      </div>
    </div>
  )
}

export default Agendamentos;