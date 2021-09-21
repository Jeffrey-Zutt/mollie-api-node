/**
 * @docs https://docs.mollie.com/reference/v2/refunds-api/cancel-refund
 */
const { createMollieClient } = require('@mollie/api-client');

const mollieClient = createMollieClient({ apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM' });

(async () => {
  try {
    const status = await mollieClient.paymentsRefunds.cancel('re_4qqhO89gsT', { paymentId: 'tr_WDqYK6vllg' });

    console.log(status);
  } catch (error) {
    console.warn(error);
  }
})();
