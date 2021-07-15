import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Main from './Main';

const Root = ({ plugin }) => {
  const [state, setState] = useState({
    developmentMode: plugin.parameters.global.developmentMode,
    fieldValue: plugin.getFieldValue(plugin.fieldPath),
    option: plugin.parameters.instance.options,
    fieldToShow: plugin.parameters.instance.field,
  });

  useEffect(() => {
    const unsubscribe = plugin.addFieldChangeListener(plugin.fieldPath, () => {
      setState({
        developmentMode: plugin.parameters.global.developmentMode,
        fieldValue: plugin.getFieldValue(plugin.fieldPath),
        option: plugin.parameters.instance.options,
        fieldToShow: plugin.parameters.instance.field,
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <Main plugin={plugin} {...state} />;
};

Root.propTypes = {
  plugin: PropTypes.object.isRequired,
};

export default Root;
