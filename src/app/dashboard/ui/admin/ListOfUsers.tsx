"use client";

import { Table, Button } from "rsuite";
import "rsuite/Table/styles/index.css";
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

export default async function ListOfUsers({
  users
}:{
  users:dataInterface[]
}) {
  
  const { Column, HeaderCell, Cell } = Table;

  

  return (
    <div className=" m-3 p-2">
      <Table
        bordered
        height={400}
        data={users}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={120} align="center" fixed>
          <HeaderCell>FirstName</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={100}>
          <HeaderCell> Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>
        <Column width={100}>
          <HeaderCell> Role</HeaderCell>
          <Cell dataKey="role" />
        </Column>
        <Column width={400}>
          <HeaderCell> Wallet Address</HeaderCell>
          <Cell dataKey="walletAddress" />
        </Column>

        {/* <Column width={100}>
            <HeaderCell>Date Of Request</HeaderCell>
            <Cell dataKey="dateOfRequest" />
          </Column> */}
        {/* <Column width={100}>
          <HeaderCell>Emai</HeaderCell>
          <Cell dataKey="lastVisit" />
        </Column> */}

        {/* <Column width={100}>
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
        </Column> */}

        {/* <Column width={120}>
          <HeaderCell>Attended Clinician</HeaderCell>
          <Cell dataKey="attendedClinician" />
        </Column> */}

        {/* <Column width={50} fixed="right">
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
        </Column> */}

        {/* <Column width={130} fixed="right">
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
        </Column> */}

        {/* <Column width={130} fixed="right">
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
        </Column> */}
      </Table>
    </div>
  );
}
