const ResturentCard = (props) => {
  const { data } = props;
  const { name, cuisines, avgRating, sla } = data;
  //console.log("res-card", data);

  return (
    <div className="m-4 p-4 w-[350px] rounded-lg text-balance bg-gray-300 hover:bg-gray-500">
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data.cloudinaryImageId
        }
        alt="res-logo"
      />

      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h5 className="text-wrap: balance">{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
      <h6>{sla.deliveryTime} mins</h6>
    </div>
  );
};

export default ResturentCard;
