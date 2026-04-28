export const scheduleReturnReminder = async (
  email: string,
  itemTitle: string,
  dueDateIso: string,
): Promise<void> => {
  // TODO: Call SendGrid-backed Cloud Function.
  console.info('Send reminder 24h before due date', { email, itemTitle, dueDateIso });
};

export const notifyOwnerOfRequest = async (
  ownerEmail: string,
  requesterName: string,
  itemTitle: string,
): Promise<void> => {
  // TODO: Call SendGrid-backed endpoint.
  console.info('Notify owner of borrow request', { ownerEmail, requesterName, itemTitle });
};
