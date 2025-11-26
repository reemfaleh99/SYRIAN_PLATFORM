const ProgressBar = ({ percent }) => {
  return (
    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden my-5">
      <div
        className="h-full bg-babyBlue rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;