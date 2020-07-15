const formatDate = (date: string): string => {
  const newDateObject = new Date(date);

  const formattedDate = new Intl.DateTimeFormat('pt-BR').format(newDateObject);

  return formattedDate;
};

export default formatDate;
