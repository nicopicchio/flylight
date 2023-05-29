const formatDate = (dateStr) => {
  const dateObj = new Date(dateStr);

  return dateObj.toLocaleString("default", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default formatDate;
