import dayjs from 'dayjs';

export const formatBlogSlug = (slug: string) => slug?.slice(0, -5);
export const formatDate = (
  date: string | null | undefined,
  type = 'MMMM DD, YYYY'
) => {
  if (!date) return 'NA';
  return dayjs(date).format(type);
};

export const durationBetweenDates = (
  startDate: string | null,
  endDate: string | null
) => {
  if (!startDate || !endDate) return 'N/A';
  const durationInMonths = dayjs(endDate).diff(dayjs(startDate), 'months');
  const years = Math.floor(durationInMonths / 12);
  const remainingMonths = durationInMonths % 12;
  let output = '';
  if (years === 1) {
    output += '1 Year ';
  } else if (years > 1) {
    output += `${years} Years `;
  }

  if (remainingMonths === 1) {
    output += '1 Month';
  } else if (remainingMonths > 1) {
    output += `${remainingMonths} Months`;
  }
  return output;
};
