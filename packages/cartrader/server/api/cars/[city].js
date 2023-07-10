import cars from '~~/data/cars.json';
export default defineEventHandler((event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);
  let filteredCars = cars;
  filteredCars = cars.filter(
    (car) => car.city.toLowerCase() === city.toLowerCase()
  );
  if (make) {
    filteredCars = filteredCars.filter(
      (car) => car.make.toLowerCase() === make.toLowerCase()
    );
  }
  if (minPrice) {
    filteredCars = filteredCars.filter(
      (car) => car.price >= parseInt(minPrice)
    );
  }
  if (maxPrice) {
    filteredCars = filteredCars.filter(
      (car) => car.price <= parseInt(maxPrice)
    );
  }
  if (!filteredCars.length) {
    throw createError({
      status: 404,
      statusMessage: `Cars not found`,
    });
  }

  return filteredCars;
});
