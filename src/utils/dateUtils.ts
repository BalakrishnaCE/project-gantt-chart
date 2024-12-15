/**
 * Formats a date object to a string in the format `YYYY-MM-DD`.
 * @param date - The date to format.
 * @returns Formatted date string.
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * Calculates the difference in days between two dates.
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @returns Number of days between the two dates.
 */
export const getDateDifference = (
  startDate: string,
  endDate: string
): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
};

/**
 * Generates an array of dates between two dates.
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @returns Array of date objects between the two dates.
 */
export const generateDateRange = (
  startDate: string,
  endDate: string
): Date[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dates: Date[] = [];

  while (start <= end) {
    dates.push(new Date(start));
    start.setDate(start.getDate() + 1);
  }

  return dates;
};
