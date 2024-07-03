// components/CustomModal.js
import React, { FC, ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { useTheme  } from '../theme/ThemeContext';

interface ModalProps {
    title: string;
    alignment: "auto" | "center" | "left" | "right" | "justify" | undefined;
    isVisible: boolean;
    children: ReactNode;
    onClose: () => void;
}

const GHIModal: FC<ModalProps> = ({ isVisible, onClose, title, children, alignment='left'}) => {
  const theme = useTheme();
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={[styles.modalContent, {backgroundColor: theme.backgroundColor}]}>
        <Text style={[styles.modalTitle, { textAlign: alignment, color: theme.textColor }]}>{title}</Text>
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    width: '100%',
    padding: 21,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 26,
    marginBottom: 19,
    fontFamily: 'Manrope-Bold',
  },
  childrenContainer: {
    marginVertical: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default GHIModal;
