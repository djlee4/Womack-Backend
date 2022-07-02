export const current_timestamp = new Date()
  .toISOString()
  .slice(0, 19)
  .replace('T', ' ');
