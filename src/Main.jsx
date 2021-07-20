import React from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const Main = ({
  fieldValue, plugin, option, fieldToShow,
}) => {
  // Create correct fieldPath
  const currentFieldPath = plugin.fieldPath;
  const modifiedFieldPath = currentFieldPath.replace(plugin.field.attributes.api_key, '');
  const fieldToShowArray = fieldToShow.split(',').map(item => (item.trim()));
  console.log('Modified Field path', `${currentFieldPath} ${modifiedFieldPath}`);

  const toggleField = (type) => {
    fieldToShowArray.map((field) => {
      plugin.toggleField(modifiedFieldPath + field, type);
      return '';
    });
  };

  if (plugin.field.attributes.field_type === 'boolean') {
    const formattedOption = (option === 'true');
    if (fieldValue === formattedOption) {
      toggleField(true);
    } else {
      toggleField(false);
    }
  } else if (plugin.getFieldValue(plugin.fieldPath) === option) {
    toggleField(true);
  } else {
    toggleField(false);
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
