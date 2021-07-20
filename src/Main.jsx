import React from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const Main = ({
  fieldValue, plugin, option, fieldToShow,
}) => {
  // Create correct fieldPath
  const currentFieldPath = plugin.fieldPath;
  const modifiedFieldPath = currentFieldPath.replace(plugin.field.attributes.api_key, '');
  console.log('Modified Field path', `${currentFieldPath} ${modifiedFieldPath}`);


  if (plugin.field.attributes.field_type === 'boolean') {
    const formattedOption = (option === 'true');
    if (fieldValue === formattedOption) {
      plugin.toggleField(modifiedFieldPath + fieldToShow, true);
    } else {
      plugin.toggleField(modifiedFieldPath + fieldToShow, false);
    }
  } else if (plugin.getFieldValue(plugin.fieldPath) === option) {
    plugin.toggleField(modifiedFieldPath + fieldToShow, true);
  } else {
    plugin.toggleField(modifiedFieldPath + fieldToShow, false);
  }
  return (
    <></>
  );
};

Main.propTypes = {
  plugin: PropTypes.bool.isRequired,
  fieldValue: PropTypes.bool.isRequired,
  option: PropTypes.bool.isRequired,
  fieldToShow: PropTypes.bool.isRequired,
};

export default Main;
