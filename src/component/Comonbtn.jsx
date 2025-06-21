import combtsty from "../style/Comonbtn.module.css";
export default function Comonbtn({ addbtn, children, toggleSection, cdisnon }) {
  return (
    <button
      type="button"
      className={`${addbtn} ${combtsty.comonbtn} ${cdisnon}`}
      onClick={toggleSection}
    >
      {children}
    </button>
  );
}
