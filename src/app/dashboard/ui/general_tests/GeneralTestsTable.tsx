"use client";

import { Table, Button, Modal } from "rsuite";
import "rsuite/Table/styles/index.css";
import { useState } from "react";

const { Column, HeaderCell, Cell } = Table;

export interface IGeneralTests {
  testFor: string;
  contraceptionMethod: string;
  stoppedOn: string;
  assistedConception: string;
  conceptionMethod: string;
  menstrualCycle: string;
  lastPeriod: string;
  agreedDueDate: string;
  gynaecologicalHistory: string;
  medicalSurgicalHistory: string;
  nutritionSupplements: string;
  allergies: string;
  medications: string;
}

export default function GeneralTestsTable({ data }: { data: IGeneralTests[] }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedReferral, setSelectedReferral] = useState<IGeneralTests | null>(null);

  const handleView = (referral: IGeneralTests) => {
    setSelectedReferral(referral);
    setShowModal(true);
  };

  return (
    <>


      <Table
        bordered
        height={200}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        {/* <Column width={180}>
          <HeaderCell>Referral To</HeaderCell>
          <Cell dataKey="testFor" />
        </Column> */}
        <Column width={180}>
          <HeaderCell>Contraception Method</HeaderCell>
          <Cell dataKey="contraceptionMethod" />
        </Column>
        <Column width={140}>
          <HeaderCell>Stopped On</HeaderCell>
          <Cell dataKey="stoppedOn" />
        </Column>
        <Column width={180}>
          <HeaderCell>Assisted Conception</HeaderCell>
          <Cell dataKey="assistedConception" />
        </Column>
        <Column width={180}>
          <HeaderCell>Conception Method</HeaderCell>
          <Cell dataKey="conceptionMethod" />
        </Column>
        <Column width={140}>
          <HeaderCell>Menstrual Cycle</HeaderCell>
          <Cell dataKey="menstrualCycle" />
        </Column>
        <Column width={140}>
          <HeaderCell>Last Period</HeaderCell>
          <Cell dataKey="lastPeriod" />
        </Column>
        <Column width={140}>
          <HeaderCell>Agreed Due Date</HeaderCell>
          <Cell dataKey="agreedDueDate" />
        </Column>
        <Column width={200}>
          <HeaderCell>Gynaecological History</HeaderCell>
          <Cell dataKey="gynaecologicalHistory" />
        </Column>
        <Column width={200}>
          <HeaderCell>Medical Surgical History</HeaderCell>
          <Cell dataKey="medicalSurgicalHistory" />
        </Column>
        <Column width={200}>
          <HeaderCell>Nutrition Supplements</HeaderCell>
          <Cell dataKey="nutritionSupplements" />
        </Column>
        <Column width={180}>
          <HeaderCell>Allergies</HeaderCell>
          <Cell dataKey="allergies" />
        </Column>
        <Column width={180}>
          <HeaderCell>Medications</HeaderCell>
          <Cell dataKey="medications" />
        </Column>
        <Column width={80} fixed="right">
          <HeaderCell>Action</HeaderCell>
          <Cell style={{ padding: "6px" }}>
            {(rowData: IGeneralTests) => (
              <Button appearance="link" onClick={() => handleView(rowData)}>
                View
              </Button>
            )}
          </Cell>
        </Column>
      </Table>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        style={{
          top: "5%",
          left: "50%",
          transform: "translate(-50%, 0)",
          position: "fixed",
          margin: 4,
          padding: 0,
          minWidth: 400,
          maxWidth: 600,
          background: "#0957D0", // Tailwind blue-600
          zIndex: 2000, // High z-index
          color: "white", // Make text readable on blue
          opacity: 1, // Fully opaque
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          borderRadius: "1rem",
        }}
        backdrop="static"

        className="ml-4"
      >
        <Modal.Header className="ml-4 mt-4 mb-4" >
          <Modal.Title>General Tests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedReferral && (
            <div className="space-y-2 ml-4">
              <div><strong>Patient Id :</strong> {selectedReferral.testFor}</div>
              <div><strong>Contraception Method:</strong> {selectedReferral.contraceptionMethod}</div>
              <div><strong>Stopped On:</strong> {selectedReferral.stoppedOn}</div>
              <div><strong>Assisted Conception:</strong> {selectedReferral.assistedConception}</div>
              <div><strong>Conception Method:</strong> {selectedReferral.conceptionMethod}</div>
              <div><strong>Menstrual Cycle:</strong> {selectedReferral.menstrualCycle}</div>
              <div><strong>Last Period:</strong> {selectedReferral.lastPeriod}</div>
              <div><strong>Agreed Due Date:</strong> {selectedReferral.agreedDueDate}</div>
              <div><strong>Gynaecological History:</strong> {selectedReferral.gynaecologicalHistory}</div>
              <div><strong>Medical Surgical History:</strong> {selectedReferral.medicalSurgicalHistory}</div>
              <div><strong>Nutrition Supplements:</strong> {selectedReferral.nutritionSupplements}</div>
              <div><strong>Allergies:</strong> {selectedReferral.allergies}</div>
              <div><strong>Medications:</strong> {selectedReferral.medications}</div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="ml-4 mt-4 mb-4">
          <Button onClick={() => setShowModal(false)} appearance="primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
