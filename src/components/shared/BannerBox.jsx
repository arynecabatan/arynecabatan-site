export const BannerBox = ({ text, lastUpdate }) => {
  return (
    <div className="my-8 p-4 rounded-xl bg-spacecadet/5 dark:bg-culturedwhite/5 w-full flex flex-col gap-2 text-spacecadet dark:text-culturedwhite">
      <small className=" font-light italic ">
{text}
      </small>
      <small className="text-xs italic font-light opacity-50">{lastUpdate}</small>
    </div>
  );
};
