const integrations = [
  {
    date: "12/08/24",
    name: "Danish",
    company: "SRIJAN",
    level: "Level-2",
  },
  {
    date: "14/08/24",
    name: "Fahad",
    company: "SRIJAN",
    level: "Level-2",
  },
  {
    date: "14/08/24",
    name: "Yusuf",
    company: "SRIJAN",
    level: "Level-2",
  },
];

export default () => (
  <section className="py-10 mt-[68px]">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-md">
        <h1 className="text-gray-800 text-xl font-medium sm:text-2xl">
          Upcoming Interviews
        </h1>
      </div>
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((item, idx) => (
          <li className="border rounded-lg">
            <div className="flex items-start justify-between p-4">
              <div className="space-y-2">
                <h4 className="text-gray-800 font-semibold">
                  {item.date} - {item.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.company} - {item.level}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
