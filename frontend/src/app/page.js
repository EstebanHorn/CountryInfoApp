import Link from "next/link";

export default async function Home() {
   // Fetch data from the API
   const url = process.env.URL_API;
  let data = await fetch(`${url}/countries`);
  data = await data.json();
  return (
    <section className="flex flex-col justify-center items-center pt-20 ">
            <h1 className="text-cyan-600 font-bold text-4xl">Countries Info App</h1>

       <div className="grid md:grid-cols-3 grid-cols-2 md:p-32 p-10 pt-10">
        {data.map((country) => (
            <Link href={`/${country.countryCode}`} key={country.countryCode} className="p-4 border text-center hover:bg-blue-400 hover:bg-opacity-50">
                <h3>{country.name}</h3>
            </Link>
        ))}
    </div>
    </section>
   
  );
}
