"use client";

import { Table, Button } from "rsuite";
import "rsuite/Table/styles/index.css";

const { Column, HeaderCell, Cell } = Table;

type dataInterface = {
  id: number;
  name: string;
  nationalId: string;
  lastVisit: string;
  status: string;
  nextVisit: string;
  recentTopic: string;
  attendedClinician: string;
};
const data: dataInterface[] = [
  {
    id: 1,
    name: "Jane Doe",
    nationalId: " 22 -3039339-B-45",
    lastVisit: "23/03/2024",
    status: "Active",
    nextVisit: "23/03/2024",
    recentTopic: "Covid-19",
    attendedClinician: "Dr. John Doe",
  },

  {
    id: 2,
    name: "John Smith",
    nationalId: "22-3039339-B-46",
    lastVisit: "12/04/2024",
    status: "Inactive",
    nextVisit: "12/05/2024",
    recentTopic: "Diabetes",
    attendedClinician: "Dr. Jane Doe",
  },
  {
    id: 3,
    name: "Alice Johnson",
    nationalId: "22-3039339-B-47",
    lastVisit: "15/05/2024",
    status: "Active",
    nextVisit: "15/06/2024",
    recentTopic: "Hypertension",
    attendedClinician: "Dr. John Smith",
  },
  {
    id: 4,
    name: "Bob Brown",
    nationalId: "22-3039339-B-48",
    lastVisit: "20/06/2024",
    status: "Active",
    nextVisit: "20/07/2024",
    recentTopic: "Asthma",
    attendedClinician: "Dr. Alice Johnson",
  },
  {
    id: 5,
    name: "Charlie Davis",
    nationalId: "22-3039339-B-49",
    lastVisit: "25/07/2024",
    status: "Inactive",
    nextVisit: "25/08/2024",
    recentTopic: "Allergies",
    attendedClinician: "Dr. Bob Brown",
  },
  {
    id: 6,
    name: "Diana Evans",
    nationalId: "22-3039339-B-50",
    lastVisit: "30/08/2024",
    status: "Active",
    nextVisit: "30/09/2024",
    recentTopic: "Flu",
    attendedClinician: "Dr. Charlie Davis",
  },
];

export default function PatientTable() {
  return (
    <div className=" m-3 p-2">
      <Table
        bordered
        height={400}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={120} align="center" fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={100}>
          <HeaderCell> National Id</HeaderCell>
          <Cell dataKey="nationalId" />
        </Column>

        {/* <Column width={100}>
          <HeaderCell>Date Of Request</HeaderCell>
          <Cell dataKey="dateOfRequest" />
        </Column> */}
        <Column width={100}>
          <HeaderCell>Last Visit</HeaderCell>
          <Cell dataKey="lastVisit" />
        </Column>

        <Column width={100}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
        </Column>

        <Column width={100}>
          <HeaderCell>Next Visit</HeaderCell>
          <Cell dataKey="nextVisit" />
        </Column>
        <Column width={150}>
          <HeaderCell>Recent Topic</HeaderCell>
          <Cell dataKey="recentTopic" />
        </Column>

        <Column width={120}>
          <HeaderCell>Attended Clinician</HeaderCell>
          <Cell dataKey="attendedClinician" />
        </Column>

        <Column width={50} fixed="right">
          <HeaderCell> </HeaderCell>

          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <>
                <Button
                  appearance="link"
                  onClick={() => alert(`id:${rowData.id}`)}
                >
                  Edit
                </Button>
              </>
            )}
          </Cell>
        </Column>

        <Column width={130} fixed="right">
          <HeaderCell> </HeaderCell>

          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <>
                <Button
                  appearance="link"
                  onClick={() => alert(`id:${rowData.id}`)}
                >
                  Request Access
                </Button>
              </>
            )}
          </Cell>
        </Column>

        <Column width={130} fixed="right">
          <HeaderCell> </HeaderCell>

          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <>
                <Button
                  appearance="link"
                  onClick={() => alert(`id:${rowData.id}`)}
                >
                  Refferal
                </Button>
              </>
            )}
          </Cell>
        </Column>

      </Table>
    </div>
  );
}
