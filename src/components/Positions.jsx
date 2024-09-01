import { FaRegEye } from "react-icons/fa";

export default ({ margin }) => {
  const tableItems = [
    {
      position_id: "050824 PHP DEVELOPER @ SJ",
      status: "Active",
      profile_submitted: 24,
      profile_sent: 17,
      selected: 1,
      rejected: 8,
      position_closed: 0,
    },
  ];

  return (
    <div className={`max-w-screen-xl mx-auto px-4 md:px-8 ${margin}`}>
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Active Positions Status
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm mr-3"
          >
            Create New Position
          </a>
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            View All Positions
          </a>
        </div>
      </div>
      <div className="mt-8 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Position ID</th>
              <th className="py-3 pr-6">Status</th>
              <th className="py-3 pr-6">Profile Submitted</th>
              <th className="py-3 pr-6">No. of Profiles Sent</th>
              <th className="py-3 pr-6">Selected</th>
              <th className="py-3 pr-6">Rejected</th>
              <th className="py-3 pr-6">Pending Screening</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">
                  {item.position_id}
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full font-semibold text-xs ${
                      item.status == "Active"
                        ? "text-white bg-green-600"
                        : "text-white bg-blue-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  {item.profile_submitted}
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  {item.profile_sent}
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.selected}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.rejected}</td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  {item.profile_sent - (item.selected + item.rejected)}
                </td>
                <td className="text-right whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="px-3 hover:text-black duration-150"
                  >
                    <FaRegEye className="text-lg" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
