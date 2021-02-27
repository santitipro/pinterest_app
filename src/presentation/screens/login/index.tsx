import React, {useState, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isLoadingSelector} from '../../store/app/selectors';
import {login} from '../../store/auth/actions';

import View from './view';

function LoginScreen() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = useMemo<boolean>(() => {
    return email.length > 5 && password.length > 0;
  }, [email, password]);

  const handleSubmit = (): void => {
    dispatch(login(email, password));
  };

  return (
    <View
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      isFormValid={isFormValid}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
}

export default LoginScreen;
