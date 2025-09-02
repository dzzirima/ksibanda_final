'use client';

import React from "react";
import { useState } from "react";
import { Calendar, ClipboardList, Stethoscope, Baby, HeartPulse, Syringe, Phone, FlaskConical, MonitorPlay, ClipboardCheck, Hospital, User2, Home, AlertTriangle } from "lucide-react";

// Tailwind-based, shadcn-friendly React layout
// Import this file into your project, or paste into a new component in a Next.js/CRA app with Tailwind.
// In Figma/XD, you can: 1) export screens as SVG/PNG via browser, 2) copy/paste vectors, or 3) use plugins to import HTML/React.

const SectionCard = ({ icon: Icon, title, children, action }) => (
  <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl border border-slate-200"><Icon className="w-5 h-5" /></div>
        <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      </div>
      {action}
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

const Field = ({ label, children, required }) => (
  <label className="block">
    <span className="text-sm text-slate-600">{label}{required && <span className="text-rose-500"> *</span>}</span>
    <div className="mt-1">{children}</div>
  </label>
);

const Input = (props) => (
  <input {...props} className={"w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 " + (props.className || "")} />
);

const Select = ({ children, ...props }) => (
  <select {...props} className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400">
    {children}
  </select>
);

const TextArea = (props) => (
  <textarea {...props} className={"w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 min-h-[96px] " + (props.className || "")} />
);

const Tab = ({ label, icon: Icon, isActive, onClick }) => (
  <button onClick={onClick} className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${isActive ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`}>
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const SectionGrid = ({ children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">{children}</div>
);

export default function MaternityRecordUI() {
  const [tab, setTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "Personal Details", icon: User2 },
    { id: "assessment", label: "Health Assessment", icon: Stethoscope },
    { id: "tests", label: "Tests & Investigations", icon: FlaskConical },
    { id: "progress", label: "Pregnancy Progress", icon: HeartPulse },
    { id: "birthplan", label: "Birth Plan", icon: ClipboardList },
    { id: "labour", label: "Labour & Birth", icon: Hospital },
    { id: "baby", label: "Baby Summary", icon: Baby },
    { id: "discharge", label: "Discharge", icon: Home },
    { id: "instructions", label: "Instructions", icon: ClipboardCheck },
    { id: "appointments", label: "Appointments", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl grid place-items-center bg-slate-900 text-white">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Maternity Care Record</h1>
              <p className="text-xs text-slate-500">Prototype layout for import to Figma/XD</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {tabs.map(t => (
              <Tab key={t.id} label={t.label} icon={t.icon} isActive={tab === t.id} onClick={() => setTab(t.id)} />
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {tab === "personal" && (
          <SectionGrid>
            <SectionCard icon={User2} title="Your Details" action={<small className="text-slate-500">Confidential</small>}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Preferred name" required><Input placeholder="e.g., Thandi" /></Field>
                <Field label="Date of Birth" required><Input type="date" /></Field>
                <Field label="Cultural background"><Input placeholder="" /></Field>
                <Field label="Interpreter required"><Select><option>No</option><option>Yes</option></Select></Field>
                <Field label="Language"><Input placeholder="" /></Field>
                <Field label="Aboriginal/Torres Strait Islander"><Select><option>No</option><option>Yes</option></Select></Field>
                <Field label="Occupation"><Input /></Field>
                <Field label="Partner/Contact person"><Input /></Field>
              </div>
            </SectionCard>
            <SectionCard icon={Hospital} title="Care Option & Place of Birth">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Recommended care option"><Input placeholder="e.g., Shared maternity care" /></Field>
                <Field label="Planned place for birth"><Input placeholder="Hospital/Clinic" /></Field>
                <Field label="Booked?"><Select><option>Unknown</option><option>Yes</option><option>No</option></Select></Field>
                <Field label="Carer name/team/clinic"><Input /></Field>
              </div>
              <div className="pt-2">
                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" className="rounded border-slate-300"/> Carer recommendation not to carry record
                </label>
              </div>
            </SectionCard>
          </SectionGrid>
        )}

        {tab === "assessment" && (
          <SectionGrid>
            <SectionCard icon={Stethoscope} title="History & Examination">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Contraception method before pregnancy"><Input /></Field>
                <Field label="Stopped on"><Input type="date" /></Field>
                <Field label="Assisted conception"><Select><option>No</option><option>Yes</option></Select></Field>
                <Field label="Conception method"><Input placeholder="e.g., IVF" /></Field>
                <Field label="Menstrual cycle"><Select><option>Regular</option><option>Irregular</option><option>Unsure</option></Select></Field>
                <Field label="Last period"><Input type="date" /></Field>
                <Field label="Agreed due date"><Input type="date" /></Field>
              </div>
              <Field label="Gynaecological history"><TextArea placeholder="Complications, infections, etc."/></Field>
              <Field label="Medical & surgical history"><TextArea placeholder="Hypertension, diabetes, asthma, etc."/></Field>
              <Field label="Nutrition/supplements"><TextArea placeholder="Vegetarian/vegan/intolerances, vitamins"/></Field>
            </SectionCard>
            <SectionCard icon={AlertTriangle} title="Allergies & Medications">
              <Field label="Allergies"><TextArea /></Field>
              <Field label="Medications"><TextArea /></Field>
            </SectionCard>
          </SectionGrid>
        )}

        {tab === "tests" && (
          <SectionCard icon={FlaskConical} title="Tests & Investigations (Booking to Late Pregnancy)" action={<small className="text-slate-500">Attach lab reports</small>}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "FBE (booking)", "Blood group", "Antibodies", "Urinalysis/MSU", "Hepatitis B", "Syphilis", "Rubella", "HIV/AIDS",
                "11–12w Combined screening", "14–20w MSST", "18–20w Ultrasound", "25–30w FBE", "25–30w GCT/GTT", "36–38w GBS"
              ].map((label) => (
                <div key={label} className="flex items-center justify-between gap-3 border rounded-xl px-3 py-2 bg-white">
                  <span className="text-sm text-slate-700">{label}</span>
                  <div className="flex items-center gap-2">
                    <Input type="date" className="w-[9.5rem]" />
                    <Select className="w-[6.5rem]"><option>Pending</option><option>Normal</option><option>Abnormal</option></Select>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {tab === "progress" && (
          <SectionCard icon={HeartPulse} title="Antenatal Visits (Vitals & Notes)">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-600">
                    <th className="py-2 pr-4">Visit Date</th>
                    <th className="py-2 pr-4">Gestation</th>
                    <th className="py-2 pr-4">BP</th>
                    <th className="py-2 pr-4">Fundal Ht</th>
                    <th className="py-2 pr-4">FHR/FM</th>
                    <th className="py-2 pr-4">Presentation/Station</th>
                    <th className="py-2 pr-4">Urinalysis</th>
                    <th className="py-2 pr-4">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <tr key={i} className="border-t">
                      <td className="py-2 pr-4"><Input type="date" /></td>
                      <td className="py-2 pr-4"><Input placeholder="wks+days" /></td>
                      <td className="py-2 pr-4"><Input placeholder="__/__" /></td>
                      <td className="py-2 pr-4"><Input placeholder="cm" /></td>
                      <td className="py-2 pr-4"><Input placeholder="e.g., 140/Mov+" /></td>
                      <td className="py-2 pr-4"><Input placeholder="e.g., Ceph -2" /></td>
                      <td className="py-2 pr-4"><Select><option>N/A</option><option>Normal</option><option>Abnormal</option></Select></td>
                      <td className="py-2 pr-4"><Input placeholder="Notes" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        )}

        {tab === "birthplan" && (
          <SectionGrid>
            <SectionCard icon={ClipboardList} title="Birth Plan & Preferences">
              <Field label="General preferences"><TextArea placeholder="Food & drink, support people, music"/></Field>
              <Field label="Pain relief preferences"><TextArea placeholder="TENS, gas, epidural, massage, water..."/></Field>
              <Field label="During labour"><TextArea placeholder="Cord cutting, positions, placenta handling..."/></Field>
              <Field label="After birth"><TextArea placeholder="Feeding, sleep, discharge timing..."/></Field>
              <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" className="rounded border-slate-300"/> I understand this is a guide and circumstances may require flexibility.
              </label>
            </SectionCard>
          </SectionGrid>
        )}

        {tab === "labour" && (
          <SectionCard icon={Hospital} title="Labour & Birth Summary">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Field label="Admission date"><Input type="date"/></Field>
              <Field label="Labour established"><Input type="datetime-local"/></Field>
              <Field label="ARM / membranes ruptured"><Input type="datetime-local"/></Field>
              <Field label="2nd stage (start)"><Input type="datetime-local"/></Field>
              <Field label="Gave birth"><Input type="datetime-local"/></Field>
              <Field label="3rd stage end"><Input type="datetime-local"/></Field>
              <Field label="Mode of delivery"><Select><option>Normal</option><option>Forceps</option><option>Ventouse</option><option>Elective CS</option><option>Emergency CS</option></Select></Field>
              <Field label="Liquor"><Select><option>Clear</option><option>Blood stained</option><option>Meconium stained</option><option>No liquor</option></Select></Field>
              <Field label="Blood loss (ml)"><Input type="number"/></Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Field label="Pain relief used"><Input placeholder="e.g., Nitrous, Epidural"/></Field>
              <Field label="Fetal monitoring"><Input placeholder="Auscultation / Sonicaid / CTG"/></Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Field label="Perineum"><Select><option>Intact</option><option>Episiotomy</option><option>Tear 1</option><option>Tear 2</option><option>Tear 3</option><option>Tear 4</option></Select></Field>
              <Field label="Sutured with"><Input/></Field>
            </div>
            <Field label="Comments"><TextArea/></Field>
          </SectionCard>
        )}

        {tab === "baby" && (
          <SectionCard icon={Baby} title="Baby Summary">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Field label="Baby name"><Input/></Field>
              <Field label="Born"><Input type="datetime-local"/></Field>
              <Field label="Gestation (wks)"><Input/></Field>
              <Field label="Gender"><Select><option>Female</option><option>Male</option><option>Intersex/DSD</option><option>Prefer not to say</option></Select></Field>
              <Field label="Weight (kg)"><Input type="number" step="0.01"/></Field>
              <Field label="Length (cm)"><Input type="number"/></Field>
              <Field label="Head circumference (cm)"><Input type="number"/></Field>
              <Field label="Vit K given?"><Select><option>No</option><option>Yes</option></Select></Field>
              <Field label="Hep B given?"><Select><option>No</option><option>Yes</option></Select></Field>
            </div>
            <Field label="Apgar details & score"><TextArea placeholder="1 min, 5 min, etc."/></Field>
            <Field label="Resuscitation"><TextArea placeholder="Suction / O2 / Bag & mask / IPPV"/></Field>
            <Field label="Feeding & skin contact"><TextArea placeholder="Skin-to-skin within 30 min; First feed time; Breast/Formula/EBM"/></Field>
          </SectionCard>
        )}

        {tab === "discharge" && (
          <SectionCard icon={Home} title="Going Home / At Home">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Wound healing"><Select><option>Good</option><option>Concern</option></Select></Field>
              <Field label="Postnatal feelings"><Input placeholder="Mood, support"/></Field>
              <Field label="Rubella vaccination required?"><Select><option>No</option><option>Yes</option></Select></Field>
              <Field label="Rh negative? Anti-D given?"><Input placeholder="e.g., Rh-, Anti-D given date/time"/></Field>
              <Field label="Breastfeeding on discharge?"><Select><option>Yes</option><option>No</option></Select></Field>
            </div>
            <Field label="Follow up appointments/referrals"><TextArea placeholder="Home visit / 6 week check / MCHN visits"/></Field>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <Field label="Discharged (date)"><Input type="date"/></Field>
              <Field label="Destination address"><Input/></Field>
            </div>
          </SectionCard>
        )}

        {tab === "instructions" && (
          <SectionGrid>
            <SectionCard icon={ClipboardCheck} title="Organising Your Care">
              <ul className="list-disc pl-6 text-slate-700 leading-7">
                <li>Pregnancy record, options for care & birth, schedule of visits</li>
                <li>Childbirth education, supports, when to seek help</li>
              </ul>
            </SectionCard>
            <SectionCard icon={AlertTriangle} title="Warning Signs" action={<span className="text-xs text-rose-600">Contact your midwife/doctor immediately</span>}>
              <ul className="list-disc pl-6 text-slate-700 leading-7">
                <li>Severe stomach pains, vaginal bleeding</li>
                <li>Membranes broken, severe or persistent headaches</li>
                <li>Constant itching, reduced baby movements</li>
              </ul>
            </SectionCard>
          </SectionGrid>
        )}

        {tab === "appointments" && (
          <SectionCard icon={Calendar} title="Appointments & Waiting Times">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-600">
                    <th className="py-2 pr-4">What/Who</th>
                    <th className="py-2 pr-4">Where</th>
                    <th className="py-2 pr-4">When</th>
                    <th className="py-2 pr-4">Arrived</th>
                    <th className="py-2 pr-4">Seen</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <tr key={i} className="border-t">
                      <td className="py-2 pr-4"><Input placeholder="Clinician or Class" /></td>
                      <td className="py-2 pr-4"><Input placeholder="Location" /></td>
                      <td className="py-2 pr-4"><Input type="datetime-local" /></td>
                      <td className="py-2 pr-4"><Input type="time" /></td>
                      <td className="py-2 pr-4"><Input type="time" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        )}
      </main>

      <footer className="max-w-6xl mx-auto px-4 pb-10 text-center text-xs text-slate-500">
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          <span>Sample UI layout. Not a medical device.</span>
        </div>
      </footer>
    </div>
  );
}
