/**
 * @docs https://docs.mollie.com/reference/v2/customers-api/list-customers
 */
import createMollieClient, { List, Customer } from '@mollie/api-client';

const mollieClient = createMollieClient({ apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM' });

(async () => {
  try {
    const customers: List<Customer> = await mollieClient.customers.page();

    console.log(customers);
  } catch (error) {
    console.warn(error);
  }
})();
