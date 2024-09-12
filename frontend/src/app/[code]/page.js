import Link from "next/link";
import Chart from "../components/chart";


export default async function Page({ params }) {
  const { code } = params;
  const url = process.env.URL_API;
  // Fetch data from the API
  let response = await fetch(`${url}/country/${code}`);

  let data = await response.json();

  // Render the data
  return (
    <section className="flex flex-col justify-center items-center pt-20 md:px-32 px-3 gap-20">
      <div className="flex justify-center items-center gap-5">
        <img
          src={data.flag}
          alt={data.countryInfo.commonName}
          className="w-24 h-auto"
        />
        <h1 className="text-white font-bold text-5xl">
          {data.countryInfo.commonName}
        </h1>
      </div>
      <div className="flex w-full md:flex-row flex-col justify-evenly items-center md:gap-0 gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-bold">Countries that border</h2>
          <ul className="border border-white divide-y-2">
            {data.countryInfo.borders.map((border) => (
              <li key={border.countryCode} className="text-center p-2">
                <Link href={`/${border.countryCode}`} className="hover:text-blue-600">{border.commonName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 flex flex-col items-center">
            <h2 className="text-2xl font-bold">Population over time</h2>
            <Chart data={data.population.populationCounts} />
        </div>
      </div>
    </section>
  );
}
