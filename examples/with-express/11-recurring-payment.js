/**
 * Example 11 - How to create an on-demand recurring payment.
 */

const { createMollieClient } = require('@mollie/api-client');

const mollieClient = createMollieClient({ apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM' });

mollieClient.customers
  .all()
  .then(customers => {
    const customerId = customers[0].id; // Select one of your customers.
    const orderId = new Date().getTime();

    mollieClient.customerPayments
      .create({
        amount: { value: '10.00', currency: 'EUR' },
        description: `Recurring payment for customer ${customerId}`,
        redirectUrl: `https://example.org/redirect?orderId=${orderId}`,
        webhookUrl: `http://example.org/webhook?orderId=${orderId}`,
        metadata: { orderId },
        customerId,
        sequenceType: 'recurring',
      })
      .then(payment => {
        // Redirect customer to payment screen with `payment.getPaymentUrl()`.
      })
      .catch(error => {
        // Do some proper error handling.
      });
  })
  .catch(error => {
    // Do some proper error handling.
  });
