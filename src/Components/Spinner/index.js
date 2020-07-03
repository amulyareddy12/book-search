import React from 'react';
import styles from './styles.css';
const Spinner = (props) => (
  <>
    <style>${`${styles}`}</style>
    <div className="lds-css ng-scope">
      <div className="lds-spinner" style={{ width: '100%', height: '100%' }}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </>
);

export default Spinner;
