"use client"

import { Table, Button } from 'rsuite';
import 'rsuite/Table/styles/index.css';
import approveRequestAccess from '../../actions/AccessRequest/approve_request_acces';
import { addAccessor, revokeAccessor } from '../../patients/test_scripts/test_new';
// import { addAccessor } from '../../patients/interact';


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
  
     
      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>
        <Cell style={{ padding: '6px' }}>
          {rowData => (
            <Button 
              className="border border-green-500 rounded-md p-1 bg-green-500 text-white hover:bg-green-700" 
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

      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>
        <Cell style={{ padding: '6px' }}>
          {rowData => (
            <Button 
              className="border border-red-500 rounded-md p-1 bg-red-500 text-white hover:bg-red-700" 
              onClick={async () => {
                let res = await revokeAccessor(rowData.requestorWalletId, rowData.patientWalletId);
                alert(`${res}`);
              }}
            >
              Reject
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
  );
};

