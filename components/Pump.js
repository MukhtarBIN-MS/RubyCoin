import React, { useRef } from 'react';
import { Animated, Text } from 'react-native';

const PumpingHeartText = ({ text, style }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const pump = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 1, duration: 900, useNativeDriver: true, }),
      Animated.timing(scale, { toValue: 0.7, duration: 900, useNativeDriver: true, }),
    ]).start(() => pump());
  };

  React.useEffect(() => {
    pump();
  }, []);

  return (
    <Animated.Text style={[style, { transform: [{ scale }] }]}>
      {text}
    </Animated.Text>
  );
};

export default PumpingHeartText;
