import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;


  const getAllAuthorBooks = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    getAllAuthorBooks();
  }, []);

  return (
    <div className="mt-5 d-flex flex-column">
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}<br />
          Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
      </div>
      <div className="d-flex flex-wrap">
        Author Books: <br />
        { authorDetails?.books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAllAuthorBooks} />
        )) }
      </div>
    </div>
  );
}
