const useYearsOfExperience = (startDate: string): number => {
  const currentDate = new Date();
  const start = new Date(startDate);
  let years = currentDate.getFullYear() - start.getFullYear();
  const differenceInMonths = currentDate.getMonth() - start.getMonth();

  if (
    differenceInMonths < 0 ||
    (differenceInMonths === 0 && currentDate.getDate() < start.getDate())
  ) {
    years -= 1;
  }
  return years;
};

export default useYearsOfExperience;
