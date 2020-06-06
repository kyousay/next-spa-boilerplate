import axios, { AxiosPromise } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { actionCreatorFactory } from 'typescript-fsa';

const methodMap = {
	read: 'get',
	create: 'post',
	update: 'put',
	delete: 'delete',
};

const actionCreator = actionCreatorFactory('AXIOS');
export const axiosAction = actionCreator<Payload>('FETCH');

type RequestType = keyof typeof methodMap;
type MethodType = 'get' | 'patch' | 'put' | 'post' | 'delete';
type Payload<B = any> = {
	type: RequestType;
	path: string;
	body?: B;
};
type AxiosFetchAction = ReturnType<typeof axiosAction>;

const typeToMethod = (type: RequestType) => methodMap[type] as MethodType;

const req = <T = any, D = any>(type: RequestType, url: string, data: D) =>
	axios
		.request<{ results: T }>({
			method: typeToMethod(type),
			url,
			data,
		})
		.then((res) => res.data.results);

export const read = (path: string) => (): AxiosFetchAction =>
	axiosAction({
		type: 'read',
		path,
	});

export const del = (path: string) => (): AxiosFetchAction =>
	axiosAction({
		type: 'delete',
		path,
	});

export const create = <B = any>(
	path: string,
	body: B,
) => (): AxiosFetchAction =>
	axiosAction({
		type: 'create',
		path,
		body,
	});

export const update = <B = any>(
	path: string,
	body: B,
) => (): AxiosFetchAction =>
	axiosAction({
		type: 'update',
		path,
		body,
	});

export default () => () => (next: Dispatch<AnyAction>) => (
	action: AnyAction | AxiosFetchAction,
): AxiosPromise | AnyAction => {
	if (action.type !== axiosAction.type) return next(action);
	const { type, path, body } = action.payload;

	return type === 'read' || type === 'delete'
		? req(type, path, {})
		: req(type, path, body);
};

