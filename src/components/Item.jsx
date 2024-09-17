
import UseToggle from "../hooks/UseToggle";

function Item() {
  const [ Infor, isLoading] = UseToggle();
  return (
    <div className="m-20 flex justify-around items-center flex-wrap gap-12">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        Infor?.map((info) => {
          return (
            <div
              key={info.id}
              className="w-[380px] h-44 border-solid border-2 border-black rounded-3xl size text-xl flex flex-col items-center shadow-cards
              transition ease-in-out delay-150  bg-one hover:-translate-y-1 hover:scale-110 hover:  duration-300 "
            >
              <h2 className=" m-5 w-full text-center text-3xl font-bold ">
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
