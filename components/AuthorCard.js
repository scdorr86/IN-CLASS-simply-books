import PropTypes from 'prop-types';

export default function AuthorCard({ authorObj }) {
  return (
    <>
      <div>{authorObj.firebaseKey}</div>
      <div>{authorObj.first_name}</div>
      <div>{authorObj.last_name}</div>
      <div>{authorObj.email}</div>
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    firebaseKey: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
    uid: PropTypes.string,
  }),
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
