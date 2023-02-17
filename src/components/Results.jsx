export default function Results() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full 
      text-white border-2 border-gray-800"
    >
      {false ? (
        <>
          <h1 className="font-bold">Result </h1>
          <p
            className={`${true ? "text-green-500" : "text-red-500"}
                `}
          >
            {true? "True" : "Fake"}
          </p>
        </>
      ) : (
        <p>Set the parameters</p>
      )}
    </div>
  );
}
