import React from 'react';

const Table = ({ books }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Author(s)</th>
          <th scope="col">Publish Date</th>
        </tr>
      </thead>
      {!!books.length && (
        <tbody>
          {books.map((e, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{e.title}</td>
              <td>{e.author_name ? e.author_name.join(', ') : '-'}</td>
              <td>{e.first_publish_year || '-'}</td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export default Table;
