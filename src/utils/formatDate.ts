const formatDate = (value: Date): string => {
  const date = new Date(value);

  return `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`;
};

export default formatDate;
