const Departments = () => {
    const departments = [
      "Emergency",
      "Intensive Care Unit (ICU)",
      "Outpatient (OPD)",
      "General Surgery",
      "Cardiology",
      "Orthopedics",
      "Pediatrics",
      "Urology",
      "Obstetrics and Gynecology",
      "Radiology",
      "Pathology / Laboratory",
      "Oncology",
      "Psychiatry / Mental Health",
      "Pharmacy",
      "Physical Medicine and Rehabilitation",
      "Nursing Services",
      "Medical Records",
      "Administration",
      "Nephrology",
      "Dialysis",
      "Gastroenterology",
      "Medicine (General/Internal Medicine)",
      "Dental",
      "Physiotherapy / Rehabilitation",
    ];
  
    return (
      <div className="pt-5 container">
        <h1 className="text-center mt-5 mb-4">Our Departments</h1>
        <ul className="list-group mb-5">
          {departments.map((dep, idx) => (
            <li key={idx} className="list-group-item">
              {dep}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default Departments;
  