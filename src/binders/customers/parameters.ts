import { CommonListParameters } from '../../types/parameters';
import { CustomerData } from '../../data/customers/Customer';
import PickOptional from '../../types/PickOptional';

interface ContextParameters {
  testmode?: boolean;
}

export type CreateParameters = ContextParameters & PickOptional<CustomerData, 'name' | 'email' | 'locale' | 'metadata'>;

export type GetParameters = ContextParameters;

export type ListParameters = ContextParameters & CommonListParameters;

export type UpdateParameters = ContextParameters & PickOptional<CustomerData, 'name' | 'email' | 'locale' | 'metadata'>;

export type DeleteParameters = ContextParameters;
