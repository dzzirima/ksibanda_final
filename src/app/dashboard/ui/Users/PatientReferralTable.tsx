"use client";

import { Table, Button } from "rsuite";
import "rsuite/Table/styles/index.css";

const { Column, HeaderCell, Cell } = Table;

type dataInterface = {
  id: number;
  requestId: string;
  dateOfRequest: string;
  type: string;
};
const data: dataInterface[] = [
  {
    id: 1,
    requestId: "23",
    dateOfRequest: "23/03/2024",
    type: "Referal",
  },
  {
    id: 2,
    requestId: "23",
    dateOfRequest: "23/03/2024",
    type: "Referal",
  },
];

export default function PatientReferralTable() {
  return (
    <Table
      bordered
      height={400}
      data={data}
      onRowClick={(rowData) => {
        console.log(rowData);
      }}
    >
      <Column width={60} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={150}>
        <HeaderCell>Request Id</HeaderCell>
        <Cell dataKey="requestId" />
      </Column>

      <Column width={150}>
        <HeaderCell>Date Of Request</HeaderCell>
        <Cell dataKey="dateOfRequest" />
      </Column>
      <Column width={150}>
        <HeaderCell>Type</HeaderCell>
        <Cell dataKey="type" />
      </Column>

      <Column width={80} fixed="right">
        <HeaderCell>.</HeaderCell>

        <Cell style={{ padding: "6px" }}>
          {(rowData) => (
            <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
              View
            </Button>
          )}
        </Cell>
      </Column>

      <Column width={80} fixed="right">
        <HeaderCell>.</HeaderCell>

        <Cell style={{ padding: "6px" }}>
          {(rowData) => (
            <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
              Grand
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
  );
}
