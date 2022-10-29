type Props = {
  title: string;
  amount: string;
  description: string;
};

const StaticsCard = ({ title, amount, description }: Props) => {
  return (
    <div className="w-40 md:w-52 border-2 border-stone-300 bg-white rounded-md mb-20 mr-5 md:mr-12">
      <div className="h-32 border-b-2 border-gray-200 flex flex-col items-center justify-center">
        <p className="mb-2 text-lg md:text-2xl">{title}</p>
        <p className="text-md md:text-xl">{amount}</p>
      </div>
      <div className="h-10 md:h-14 flex items-center justify-center text-md md:text-lg">
        {description}
      </div>
    </div>
  );
};

export default StaticsCard;
