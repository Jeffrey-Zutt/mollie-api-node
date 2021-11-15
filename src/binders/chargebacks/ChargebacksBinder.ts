import Chargeback, { ChargebackData, transform } from '../../data/chargebacks/Chargeback';
import List from '../../data/list/List';
import renege from '../../plumbing/renege';
import TransformingNetworkClient from '../../TransformingNetworkClient';
import Callback from '../../types/Callback';
import InnerBinder from '../InnerBinder';
import { ListParameters } from './parameters';

const pathSegment = 'chargebacks';

export default class ChargebacksBinder extends InnerBinder<ChargebackData, Chargeback> {
  constructor(protected readonly networkClient: TransformingNetworkClient) {
    super();
  }

  /**
   * Retrieve all received chargebacks. If the payment-specific endpoint is used, only chargebacks for that specific payment are returned.
   *
   * The results are paginated. See pagination for more information.
   *
   * @since 2.0.0
   * @deprecated Use `page` instead.
   * @see https://docs.mollie.com/reference/v2/chargebacks-api/list-chargebacks
   */
  public all: ChargebacksBinder['page'] = this.page;
  /**
   * Retrieve all received chargebacks. If the payment-specific endpoint is used, only chargebacks for that specific payment are returned.
   *
   * The results are paginated. See pagination for more information.
   *
   * @since 3.0.0
   * @deprecated Use `page` instead.
   * @see https://docs.mollie.com/reference/v2/chargebacks-api/list-chargebacks
   */
  public list: ChargebacksBinder['page'] = this.page;

  /**
   * Retrieve all received chargebacks. If the payment-specific endpoint is used, only chargebacks for that specific payment are returned.
   *
   * The results are paginated. See pagination for more information.
   *
   * @since 3.0.0
   * @see https://docs.mollie.com/reference/v2/chargebacks-api/list-chargebacks
   */
  public page(parameters?: ListParameters): Promise<List<Chargeback>>;
  public page(parameters: ListParameters, callback: Callback<List<Chargeback>>): void;
  public page(parameters: ListParameters = {}) {
    if (renege(this, this.page, ...arguments)) return;
    return this.networkClient.list<ChargebackData, Chargeback>(pathSegment, 'chargebacks', parameters).then(result => this.injectPaginationHelpers(result, this.page, parameters));
  }
}