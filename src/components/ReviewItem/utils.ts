export const formatRelativeDate = (value: string) => {
  const parsedDate = new Date(value);
  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  const now = new Date();
  const diffMs = now.getTime() - parsedDate.getTime();
  if (diffMs <= 0) {
    return "hoje";
  }

  const dayMs = 1000 * 60 * 60 * 24;
  const days = Math.floor(diffMs / dayMs);

  if (days < 7) {
    return `${days === 1 ? "1 dia" : `${days} dias`} atras`;
  }

  const weeks = Math.floor(days / 7);
  if (weeks < 5) {
    return `${weeks === 1 ? "1 semana" : `${weeks} semanas`} atras`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months === 1 ? "1 mes" : `${months} meses`} atras`;
  }

  const years = Math.floor(days / 365);
  return `${years === 1 ? "1 ano" : `${years} anos`} atras`;
};
