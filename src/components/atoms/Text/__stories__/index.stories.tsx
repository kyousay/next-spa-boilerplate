import React from 'react';
import { Text } from '../';
import { storiesOf } from '@storybook/react';

storiesOf('atoms/Text', module).add('defaultテキスト', () => {
	return <Text>テキスト</Text>;
});
