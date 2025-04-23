export default function Insights({ keyName, value }) {
  return (
    <>
      <div className="flex justify-between">
        <span>{keyName}</span>
        <span className="font-bold">{value}</span>
      </div>
    </>
  );
}
