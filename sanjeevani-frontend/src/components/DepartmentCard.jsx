const DepartmentCard = ({ image, title }) => {
    return (
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer bg-white">
        <div className="bg-blue-900 text-white text-center py-3 font-semibold text-lg">
          {title}
        </div>
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </div>
    );
  };
  
  export default DepartmentCard;
  