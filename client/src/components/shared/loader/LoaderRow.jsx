import React from 'react';
import Loader from './Loader';

const LoaderRow = ({colSpan, message}) => (
  <tr className=' bg-white h-[300px]'>
    <td colSpan={colSpan}>
      <Loader message={message} />
    </td>
  </tr>
);

export default LoaderRow;
