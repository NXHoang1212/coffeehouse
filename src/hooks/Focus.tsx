import {useState} from 'react';

export const FocusName = () => {
  const [focusName, setFocusName] = useState<boolean>(false);
  const onFocusName = () => {
    setFocusName(true);
  };
  const onBlurName = () => {
    setFocusName(false);
  };
  return {focusName, onFocusName, onBlurName};
};

export const FocusHo = () => {
  const [focusHo, setFocusHo] = useState<boolean>(false);
  const onFocusHo = () => {
    setFocusHo(true);
  };
  const onBlurHo = () => {
    setFocusHo(false);
  };
  return {focusHo, onFocusHo, onBlurHo};
};

export const FocusEmail = () => {
  const [focusEmail, setFocusEmail] = useState<boolean>(false);

  const onFocusEmail = () => {
    setFocusEmail(true);
  };
  const onBlurEmail = () => {
    setFocusEmail(false);
  };
  return {focusEmail, onFocusEmail, onBlurEmail};
};

export const FocusUpdate = () => {
  const [focusUpdate, setFocusUpdate] = useState<boolean>(false);

  const onFocusUpdate = () => {
    setFocusUpdate(true);
  };
  const onBlurUpdate = () => {
    setFocusUpdate(false);
  };
  return {focusUpdate, onFocusUpdate, onBlurUpdate};
};

export const FocusLogin = () => {
  const [focusLogin, setFocusLogin] = useState<boolean>(false);

  const onFocusLogin = () => {
    setFocusLogin(true);
  };
  const onBlurLogin = () => {
    setFocusLogin(false);
  };
  return {focusLogin, onFocusLogin, onBlurLogin};
};
