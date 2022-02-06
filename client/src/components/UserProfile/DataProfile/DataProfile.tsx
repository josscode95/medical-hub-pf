import { useSelector } from "react-redux";
import s from "./DataProfile.module.css";

interface DataProfileProps{
    firstName: any;
    lastName: any;
    id : any,
    dni: any,
    phone: any,
    planId : any,
    email : any
}

export default function DataProfile ({firstName, lastName, id, dni, phone, planId, email} : DataProfileProps) : JSX.Element {

  const plan = useSelector((state: any) => state.patientInfo.Plan);
  var name;
  plan ? ({ name } = plan) : ({ name } = { name: "" });

  return (
    <div>
      <div className={s.dataContainer}>
        <span className={s.fullName}>{firstName + " " + lastName}</span>
        <span className={s.planText}>Plan</span>
        <div className={s.planContainer}>
          <span>{name}</span>
        </div>
        <div className={s.labelContainer}>
          <span className={s.label}>Email:</span>
          <span className={s.dataLabel}>{email}</span>
        </div>
        <div className={s.labelContainer}>
          <span className={s.label}>Password:</span>
          <span className={s.dataLabel}>***********</span>
        </div>
        <div className={s.labelContainer}>
          <span className={s.label}>DNI:</span>
          <span className={s.dataLabel}>{dni}</span>
        </div>
        <div className={s.labelContainer}>
          <span className={s.label}>Phone:</span>
          <span className={s.dataLabel}>{phone}</span>
        </div>
      </div>
    </div>
  );


}