import {FilterChain} from 'src/plugins/api-helper/api-filter-chain/filter-chain';
import {ApiOptions} from 'src/plugins/api-helper/api-fetch/api-options';

export type FetchMethod = 'GET' | 'POST'
export type RequestState = 'PENDING' | 'FILTERING' | 'SUCCESS' | 'ERROR'

export interface ApiRequest<T> {
  url: string,
  method: FetchMethod,
  responseFilterChain: FilterChain<Response, any, T>,
  state: RequestState,
  requestTime: number,
  options?: ApiOptions<T>,
  body?: any,
}
