import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAuthor } from '../../../api/authorData';
import AuthorForm from '../../../components/forms/AuthorForm';

export default function EditAuthor() {
  const [editAuthor, setEditAuthor] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditAuthor);
  }, [firebaseKey]);

  console.warn('this is', editAuthor);
  return (<AuthorForm obj={editAuthor} />);
}
