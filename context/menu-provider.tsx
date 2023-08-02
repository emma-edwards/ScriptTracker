import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useVisible } from '../hooks/visible/use-visible';
import {MenuContext} from './contexts';


const MenuContextProvider = ({ children }) => {
  const {
    handleHideAll,
    deleteDialogVisible,
    feedbackDialogVisible,
    handleHide,
    handleShow,
    addPortalDialogVisible,
  } = useVisible();

  const value = useMemo(
    () => ({
      deleteDialogVisible,
      feedbackDialogVisible,
      handleHide,
      handleHideAll,
      handleShow,
      addPortalDialogVisible,
    }),
    [
      handleHideAll,
      deleteDialogVisible,
      feedbackDialogVisible,
      handleHide,
      handleShow,
      addPortalDialogVisible,
    ]
  );


  console.log(MenuContext === undefined);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

MenuContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {MenuContext, MenuContextProvider};