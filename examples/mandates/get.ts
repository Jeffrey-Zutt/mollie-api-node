/**
 * @docs https://docs.mollie.com/reference/v2/mandates-api/get-mandate
 */
import createMollieClient, { Mandate } from '@mollie/api-client';

const mollieClient = createMollieClient({ apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM' });

(async () => {
  try {
    const mandate: Mandate = await mollieClient.customersMandates.get('mdt_7UmCdnzAfH', {
      customerId: 'cst_pzhEvnttJ2',
    });

    console.log(mandate);
  } catch (error) {
    console.warn(error);
  }
})();
