"use client";

import { Table, Button, Modal } from "rsuite";
import "rsuite/Table/styles/index.css";
import { useState } from "react";

const { Column, HeaderCell, Cell } = Table;

export interface IReferral {
  id: string;
  referalTo: string;
  hospital: string;
  specialist: string;
  referrerName: string;
  usualDoctor: string;
  address: string;
  phoneNumber: string;
  referalDetails: string;
  requestAccess: string;
  clinicName: string;
  createdAt: string;
  updatedAt: string;
}

export default function PatientReferralTable({ data }: { data: IReferral[] }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedReferral, setSelectedReferral] = useState<IReferral | null>(null);

  const handleView = (referral: IReferral) => {
    setSelectedReferral(referral);
    setShowModal(true);
  };

  return (
    <>
      <Table
        bordered
        height={400}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={150}>
          <HeaderCell>Hospital</HeaderCell>
          <Cell dataKey="hospital" />
        </Column>
        <Column width={150}>
          <HeaderCell>Specialist</HeaderCell>
          <Cell dataKey="specialist" />
        </Column>
        <Column width={150}>
          <HeaderCell>Referrer Name</HeaderCell>
          <Cell dataKey="referrerName" />
        </Column>
        <Column width={150}>
          <HeaderCell>Usual Doctor</HeaderCell>
          <Cell dataKey="usualDoctor" />
        </Column>
        <Column width={200}>
          <HeaderCell>Address</HeaderCell>
          <Cell dataKey="address" />
        </Column>
        <Column width={150}>
          <HeaderCell>Phone Number</HeaderCell>
          <Cell dataKey="phoneNumber" />
        </Column>
        <Column width={200}>
          <HeaderCell>Referral Details</HeaderCell>
          <Cell dataKey="referalDetails" />
        </Column>
        <Column width={120}>
          <HeaderCell>Request Access</HeaderCell>
          <Cell dataKey="requestAccess" />
        </Column>
        <Column width={150}>
          <HeaderCell>Clinic Name</HeaderCell>
          <Cell dataKey="clinicName" />
        </Column>
        <Column width={180}>
          <HeaderCell>Created At</HeaderCell>
          <Cell dataKey="createdAt" />
        </Column>

        <Column width={80} fixed="right">
          <HeaderCell>.</HeaderCell>
          <Cell style={{ padding: "6px" }}>
            {(rowData: IReferral) => (
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
          <Modal.Title>Referral Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedReferral && (
            <div className="space-y-2 ml-4">
              <div><strong>Hospital:</strong> {selectedReferral.hospital}</div>
              <div><strong>Specialist:</strong> {selectedReferral.specialist}</div>
              <div><strong>Referrer Name:</strong> {selectedReferral.referrerName}</div>
              <div><strong>Usual Doctor:</strong> {selectedReferral.usualDoctor}</div>
              <div><strong>Address:</strong> {selectedReferral.address}</div>
              <div><strong>Phone Number:</strong> {selectedReferral.phoneNumber}</div>
              <div><strong>Referral Details:</strong> {selectedReferral.referalDetails}</div>
              <div><strong>Request Access:</strong> {selectedReferral.requestAccess}</div>
              <div><strong>Clinic Name:</strong> {selectedReferral.clinicName}</div>
              <div><strong>Created At:</strong> {selectedReferral.createdAt}</div>
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
