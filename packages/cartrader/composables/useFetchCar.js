export default async (id) => {
  const { data, error, refresh } = await useFetch(`/api/car/${id}`);
  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage,
    });
  }
  return { data, refresh };
};
