import "rsuite/dist/rsuite.min.css";

import { Table } from 'rsuite';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

const { Column, Cell, HeaderCell } = Table;
const data = [
  {nome: "joao", id: "1"},
  {nome: "jose", id: "2"},
]
const Clientes = () => {
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
            height={400}
            data={data}
            onRowClick={rowData => {
              console.log(rowData);
            }}
          >
            <Column width={60} align="center" fixed>
              <HeaderCell>Id</HeaderCell>
              <Cell dataKey="id" />
            </Column>
            <Column width={60} align="center" fixed>
              <HeaderCell>Nome</HeaderCell>
              <Cell dataKey="nome" />
            </Column>
          </Table>
        </div>
      </div>
    </div>
  )
}
aula 04 2:28:20
export default Clientes;