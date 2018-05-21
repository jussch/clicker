/**
 * Created by Justin on 5/20/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { selectResource } from '../../../../selectors/ResourceSelectors';
import NumberDisplay from '../../../Library/NumberDisplay';

function CostDisplayItem(props) {
  const {
    resource,
    cost,
  } = props;

  return (
    <span>
      <NumberDisplay value={cost} />
    </span>
  );
}

CostDisplayItem.propTypes = {
  cost: PropTypes.number.isRequired,
  resourceName: PropTypes.string.isRequired,
};

function mapStateToProps(state, props) {
  return {
    resource: selectResource(props.resourceName)(state),
  };
}

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(CostDisplayItem);
