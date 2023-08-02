import {useState} from 'react';

export const useVisible = () => {
  const [addPortalDialogVisible, setAddPortalDialogVisible] = useState(false);
  const [feedbackDialogVisible, setFeedbackDialogVisible] = useState(false);
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

  const handleShow = ({dialogType}) => {
    switch (dialogType) {
      case 'addPortal': {
        setAddPortalDialogVisible(true);

        break;
      }
      case 'feedback': {
        setFeedbackDialogVisible(true);

        break;
      }
      case 'delete': {
        setDeleteDialogVisible(true);

        break;
      }
      default: {
        break;
      }
    }
    return true;
  };

  const handleHide = ({dialogType}) => {
    switch (dialogType) {
      case 'addPortal': {
        setAddPortalDialogVisible(false);

        break;
      }
      case 'feedback': {
        setFeedbackDialogVisible(false);

        break;
      }
      case 'delete': {
        setDeleteDialogVisible(false);

        break;
      }
      default: {
        break;
      }
    }
    return true;
  };

  const handleHideAll = () => {
    setAddPortalDialogVisible(false);
    setFeedbackDialogVisible(false);
    setDeleteDialogVisible(false);
  };

  return {
    deleteDialogVisible,
    feedbackDialogVisible,
    handleHide,
    handleHideAll,
    handleShow,
    addPortalDialogVisible,
  };
};