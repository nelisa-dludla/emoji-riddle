const LeaderboardTable = ({ leaderboardData }) => {
  let index = 0;
  const rowElements = leaderboardData.map((row) => {
    return (
      <tr className="bg-white border-b-2">
        <td className="p-4">{(index += 1)}</td>
        <td className="p-4">{row.username}</td>
        <td className="p-4">{row.score}</td>
      </tr>
    );
  });

  return (
    <>
      <table className="mt-20 shadow-xl">
        {/* Headers */}
        <thead>
          <tr className="bg-white border-b-2">
            <th className="p-4">#</th>
            <th className="p-4">Username</th>
            <th className="p-4">Score</th>
          </tr>
        </thead>
        {/* Data */}
        <tbody>{rowElements}</tbody>
      </table>
      ;
    </>
  );
};

export default LeaderboardTable;
