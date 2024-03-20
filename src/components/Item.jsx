import { useEffect, useState } from "react";

function Item() {
  const [Infor, setInfor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.ok) {
        const data = await response.json();
        setInfor(data);
        setIsLoading(false);
      } else console.log("error");
    } catch (error) {
      console.log("error massage", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="m-20 flex justify-around items-center flex-wrap gap-12">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        Infor?.map((info) => {
          return (
            <div
              className="w-[380px] h-44 border-solid border-2 border-white rounded-3xl size text-xl flex flex-col items-center shadow-cards
              transition ease-in-out delay-150  bg-one hover:-translate-y-1 hover:scale-110 hover:  duration-300 "
            >
              <h2 className="bg-two m-5 w-full text-center text-3xl ">
                {info.name}
              </h2>
              <p>{info.email}</p>
              <p>{info.phone}</p>
              <p>{info.company.name}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
export default Item;
