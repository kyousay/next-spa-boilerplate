import actionCreatorFactory from 'typescript-fsa';
import { createSelector } from 'reselect';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { combine, maxLength, minLength, regexp } from 'favalid';
import { RootState } from './reducer';
const actionCreator = actionCreatorFactory('DIGIENQ/REGISTRATION');

type ChangePayload = {
	name: string;
	value: string;
};

export const change = actionCreator<ChangePayload>('FORM_CHANGE');
export const submit = actionCreator('FORM_SUBMIT');

const INITIAL_STATE = {
	form: {
		username: '',
		mailaddress: '',
		mailaddressConfirm: '',
	},
	edited: {
		username: false,
		mailaddress: false,
		mailaddressConfirm: false,
	},
	validationErrors: {
		username: { error: false, message: '' },
		mailaddress: { error: false, message: '' },
		mailaddressConfirm: { error: false, message: '' },
	},
};

/* validations */

const minLengthMessage = () => '10文字以上で入力してください';
const maxLengthMessage = () => '100文字以内で入力してください';
const emailMessage = () => 'メールアドレスの形式が不正です。';
const emailEqualMessage = () => '確認用メールアドレスが一致しません';
const mailCheck = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailValidator = combine(
	minLength(10, minLengthMessage),
	maxLength(100, maxLengthMessage),
	regexp(mailCheck, emailMessage, {}),
);

const usernameValidator = combine(
	minLength(8, minLengthMessage),
	maxLength(16, maxLengthMessage),
);

const validator = (form: typeof INITIAL_STATE.form) => ({
	username: usernameValidator(form.username),
	mailaddress: emailValidator(form.mailaddress),
	mailaddressConfirm: emailValidator(form.mailaddressConfirm),
	mailaddressEqual: {
		error: form.mailaddress === form.mailaddressConfirm,
		message: emailEqualMessage(),
	},
});

const reducer = reducerWithInitialState(INITIAL_STATE).case(
	change,
	(state, payload) => {
		const form = {
			...state.form,
			[payload.name]: payload.value,
		};
		const edited = {
			...state.edited,
			[payload.name]: true,
		};
		const validationErrors = validator(form);

		return { ...state, form, edited, validationErrors };
	},
);

export default reducer;

export const selectRegistration = createSelector(
	(state: RootState) => state.ui.registration,
	(registration) => registration,
);

export type SelectedRegistration = ReturnType<typeof selectRegistration>;
