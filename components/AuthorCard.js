import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';

export default function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name}?`)) {
      deleteSingleAuthor(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title style={{ color: 'red' }}>{authorObj.first_name}<span> </span>{authorObj.last_name}</Card.Title>
          <Card.Subtitle style={{ color: 'red' }}>{authorObj.email}</Card.Subtitle>
          <p className="card-text bold">{authorObj.favorite && <span>Favorite<br /></span> }</p>
          {/* DYNAMIC LINK TO VIEW THE AUTHOR DETAILS  */}
          <Link href={`/author/${authorObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          {/* DYNAMIC LINK TO EDIT THE AUTHOR DETAILS  */}
          <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
    uid: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
};
AuthorCard.defaultProps = {
  authorObj: {
    email: 'Email Here',
    firebaseKey: 'Firebase Key Here',
    first_name: 'First Name',
    last_name: 'Last Name',
    image: 'Url',
    favorite: 'Boolean',
    uid: 'User ID',
  },
};
