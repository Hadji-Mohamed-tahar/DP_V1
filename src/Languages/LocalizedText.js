import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import i18n from './i18n';

const LocalizedText = ({ children }) => {
  const language = useSelector((state) => state.language);
  const direction = useSelector((state) => state.direction);
  console.log(direction);
  const isRTL = direction === 'RTL';

  return (
    <Text style={{ writingDirection: isRTL ? 'rtl' : 'ltr' }}>
    {/* <Text style={{ textAlign: "right" }}> */}
    {children}
    </Text>
  );
};

export default LocalizedText;
