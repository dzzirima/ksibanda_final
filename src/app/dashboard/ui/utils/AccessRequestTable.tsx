"use client"

import { Table, Button } from 'rsuite';
import 'rsuite/Table/styles/index.css';
import approveRequestAccess from '../../actions/AccessRequest/approve_request_acces';
import { addAccessor } from '../../patients/test_scripts/test_new';


const { Column, HeaderCell, Cell } = Table;



export default function AccessrequestTable({data}:{
  data: any
}) {
  return (
    <Table
    bordered	
      height={400}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column width={300} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={400}>
        <HeaderCell>Request Id</HeaderCell>
        <Cell dataKey="requestorWalletId" />
      </Column>

      <Column width={150}>
        <HeaderCell>Status Request</HeaderCell>
        <Cell dataKey="status" />
      </Column>
      {/* <Column width={150}>
        <HeaderCell>Type</HeaderCell>
        <Cell dataKey="type" />
      </Column> */}
     
      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>

        <Cell style={{ padding: '6px' }}>
          {rowData => (
            <Button 
              className="border border-blue-500 rounded-md p-1 bg-blue-500 text-white hover:bg-blue-700" 
              onClick={async () => {
              let res = await addAccessor(rowData.requestorWalletId, rowData.patientWalletId);
              alert(`${res}`);
              }}
            >
              Approve
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
  );
};

