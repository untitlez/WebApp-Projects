import Card from "../components/card";

async function fecthData() {
  const res = await fetch("https://fake-coffee-api.vercel.app/api");
  return res.json();
};

export default async function Api() {
  const data = await fecthData();
  return (
    <>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.name}
          image={item.image_url}
          description={item.description}
          flavor={item.flavor_profile}
          weight={item.weight}
          price={item.price}
        ></Card>
      ))}
    </>
  );
}


