"use client";

import { Table, Button } from "rsuite";
import "rsuite/Table/styles/index.css";
import requestAccess from "../../actions/AccessRequest/request_access";

const { Column, HeaderCell, Cell } = Table;

export default function PatientTable({
  patientDetails,
}: {
  patientDetails: any[];
}) {
  return (
    <div className=" m-3 p-2">
      <Table
        bordered
        height={400}
        data={patientDetails}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={100} align="center" fixed>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={100}>
          <HeaderCell> Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Last Visit</HeaderCell>
          <Cell dataKey="lastVist" />
        </Column>
        <Column width={100}>
          <HeaderCell>Next Visit</HeaderCell>
          <Cell dataKey="nextVisit" />
        </Column>
        <Column width={150}>
          <HeaderCell>Recent Topic</HeaderCell>
          <Cell dataKey="topic" />
        </Column>

        <Column width={130} fixed="right">
          <HeaderCell> </HeaderCell>

          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <>
                <Button
                  appearance="link"
                  onClick={async () => {

                    alert(`Request Successfully sent !!!`);
                    //@ts-ignore
                    let currentaddress = window.ethereum.selectedAddress;

                    // console.log(currentaddress);
                    // console.log(rowData.walletAddress);
                    let responce = await requestAccess(
                      currentaddress,
                      rowData.walletAddress,
                     "active"
                    );

                    
                  }}
                >
                  Request Access
                </Button>
              </>
            )}
          </Cell>
        </Column>

        <Column width={500} fixed="right">
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
