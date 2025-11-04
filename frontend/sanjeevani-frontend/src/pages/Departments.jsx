import { Link } from "react-router-dom";
import departments from "../data/departments";
import DepartmentCard from "../components/DepartmentCard";

const Departments = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50">
      <h2 className="text-center text-4xl font-bold text-blue-700 mb-8">
        Our Medical Departments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {departments.map((dep, index) => (
          <Link to={`/departments/${dep.slug}`} key={index}>
            <DepartmentCard image={dep.image} title={dep.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Departments;




















// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// const Departments = () => {
//   const departments = [
//     { title: "Nephrology", img: "https://ayushmanhospital.co.in/images/dep1.jpg" },
//     { title: "Physiotherapy & Rehabilitation", img: "https://ayushmanhospital.co.in/images/dep2.jpg" },
//     { title: "Neurology", img: "https://ayushmanhospital.co.in/images/dep3.jpg" },
//     { title: "Orthopedic", img: "https://ayushmanhospital.co.in/images/dep4.jpg" }
//   ];

//   return (
//     <div className="py-5" style={{ backgroundColor: "#F5FBFF" }}>
//       <Container>
//         <h2 className="text-center fw-bold mb-4" style={{ color: "#0081CE" }}>
//           Our <span style={{ color: "#003E7E" }}>Departments</span>
//         </h2>

//         <p className="text-center mb-5" style={{ maxWidth: "700px", margin: "0 auto", color:"#555" }}>
//           Our hospital provides expert care across multiple specialist departments with advanced treatment facilities.
//         </p>

//         <Row className="g-4">
//           {departments.map((dept, index) => (
//             <Col md={3} sm={6} xs={12} key={index}>
//               <div className="shadow-sm bg-white rounded overflow-hidden h-100 dept-card" style={{ transition: "0.3s" }}>
//                 <img src={dept.img} alt={dept.title} className="w-100" style={{ height: "160px", objectFit: "cover" }} />
//                 <div className="p-3 text-center">
//                   <h5 className="fw-bold" style={{ color: "#003E7E" }}>{dept.title}</h5>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Hover Effect CSS */}
//       <style>
//         {`
//           .dept-card:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 8px 18px rgba(0,0,0,0.2);
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Departments;
